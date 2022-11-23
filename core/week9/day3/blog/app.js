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


app.put('/api/entries/:title', (req, res) => {
    // Identificar el registro que quiere actualizar - QUERY SQL SELECT
    pool.query(`SELECT * FROM entries WHERE title = REPLACE("${req.params.title}", "-", " ")`, (err, [entry]) => {
        // SI HAY PROBLEMA EN EL SERVER un 500 - error de sintaxis || servidor de base de datos inoperativo 
       if (err) return res.status(500).send("En estos momentos estamos trabajando para darte lo mejor")
       // SI NO EXISTE TE DEVUELVO un 404 Not found - rows is empty
       if(!entry) return res.status(404).send("No se ha encontrado una entrada con el título")

       // Validar la entrada del usuario con los nuevos datos a actualizar - schema.validate()
        const scheme = Joi.object({
            title: Joi.string(),
            content: Joi.string(),
            date: Joi.string(),
            id_author: Joi.number().min(1),
            category: Joi.string()
        }).min(1)
    
        const {error} = scheme.validate(req.body) 

        // SI NO VALIDA TE DEVUELVO UN 400 Bad request - error
        if (error) return res.status(400).send(error.details[0].message)
    
        // Actualizar el registro - QUERY SQL UPDATE
        pool.query('UPDATE entries SET ? WHERE id_entry = ?', [req.body, entry.id_entry], (err, rows) => {
            // SI NO PODEMOS ACTUALIZARLO DEVUELVE un 500 - err
            if (err) return res.status(500).send("En estos momentos estamos trabajando para darte lo mejor de lo mejor")

            // DEVUELVE 200 - res.status(200)
            res.status(200).json({...entry, ...req.body})
        })
    })
})

app.delete('/api/authors/:id', (req, res) => {
    const {id} = req.params

    // Identificar el registro que quiere actualizar - QUERY SQL SELECT
    pool.query(`SELECT * FROM authors WHERE id_author = ${id}`, (err, [author]) => {
        // SI HAY PROBLEMA EN EL SERVER un 500 - error de sintaxis || servidor de base de datos inoperativo 
        if (err) return res.status(500).send("En estos momentos estamos trabajando para darte lo mejor")
        // SI NO EXISTE TE DEVUELVO un 404 Not found - rows is empty
        if(!author) return res.status(404).send("No se ha encontrado el autor")
        
        // Borrarlo
        pool.query(`DELETE FROM authors WHERE id_author = ${id}`, (err, rows) => {
            // SI HAY PROBLEMA EN EL SERVER un 500 - error de sintaxis || servidor de base de datos inoperativo 
            if (err) return res.status(500).send("En estos momentos estamos trabajando para darte lo mejor de lo mejor")

            res.status(200).send(author)
        })
    })
})

app.get('/ping', (req, res) => {
    pool.query('SELECT "pong" as ping', (err, rows) => {
        res.send(rows)
    })
})

app.listen(3000)