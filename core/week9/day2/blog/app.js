const express = require('express')
const mysql = require('mysql2')
const Joi = require('joi')

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306,
    database: "ejercicio"
})

const app = express()

app.use(express.json())

app.get('/api/entries', (req, res) => {
    pool.query('SELECT title, content, date, category, name, surname, image  FROM authors AS A INNER JOIN entries AS E ON A.id_author = E.id_author', (err, rows) => {
        if(err) return res.status(500).send("Tranqui lo solucionamos rápido")

        res.json(rows)
    })
})

app.get('/api/authors', (req, res) => {
    let sql = 'SELECT * FROM authors'

    if (req.query.email)
        sql += ` WHERE email = "${req.query.email}"`
      
    pool.query(sql, (err, rows) => {
        if(err) return res.status(500).send("Tranqui lo solucionamos rápido")
        if(!rows.length) return res.status(404).send("No tenemos autores con ese correo electrónico")

        res.status(200).json(rows)
    })
})

app.post('/api/authors', (req, res) => {
    const {name, surname, email, image} = req.body

    const scheme = Joi.object({
        name: Joi.string().required(),
        surname: Joi.string().required(),
        email: Joi.string().email().required(),
        image: Joi.string().required()
    })

    const {error} = scheme.validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    pool.query(`INSERT INTO authors (name, surname, email, image) VALUE ("${name}", "${surname}", "${email}", "${image}")`, (err, rows) => {
        if(err) return res.status(500).send("Tranqui lo solucionamos rápido")

        res.status(201).json({message: `usuario creado: ${email}`})
    })
})

app.get('/ping', (req, res) => {
    pool.query('SELECT "pong" as ping', (err, rows) => {
        res.send(rows)
    })
})

app.listen(3000)