const Joi = require('joi');
const mysql = require('mysql2')

// Conecta con la base de datos
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'catedrales',
  });

const express = require('express')

const app = express()

app.use(express.json())

app.get('/catedrales', (req, res) => {
    pool.query('SELECT * from catedrales', (err, rows) => {
        if(err) return res.status('500').send('Espera que solucionemos algo')

        res.json(rows)
    })
})

app.get('/catedral/:id', (req, res) => {
    pool.query('SELECT * from catedrales WHERE IDCatedral = ' + +req.params.id, (err, rows) => {
        if (!rows.length) {
            res.status(404).send("No hay catedrales con esa id")
            return
        }

        return res.json(rows)
    })
})

app.post('/catedral', (req, res) => { 
    const {name, city } = req.body

    const schema = Joi.object({
        name: Joi.string().required(),
        city: Joi.string()
            .min(2)
            .required()
    })

    const {error} = schema.validate(req.body);
    if (error) return res.status(401).json(error.details[0].message)

    pool.query(`INSERT INTO catedrales (name, city) VALUES ("${name}", "${city}")`, (err, rows) => {
        if(err) return res.status('500').send('Espera que solucionemos algo')

        res.status(201).json({id: rows.insertId, name, city})    
    }) 
})

app.get('/ping', (req, res) => {
    pool.query('SELECT "Pong" AS ping' , function(err, rows) {
        res.json(rows[0])
     })
})

app.listen(3000)