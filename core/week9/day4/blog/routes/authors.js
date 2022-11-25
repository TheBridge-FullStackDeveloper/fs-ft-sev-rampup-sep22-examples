const Joi = require('joi')

const pool = require('../db')
require('express-async-errors')
const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
        try {
            let sql = 'SELECT * FROM authors'

            if (req.query.email)
                sql += ` WHERE email = "${req.query.email}"`

            const [rows] = await pool.query(sql, [req.query])
    
            if(!rows.length) return res.status(404).send("No tenemos autores con ese correo electrónico")
        
            res.status(200).json(rows)
        } catch (err) {
            res.status(500).send("Tranqui lo solucionamos rápido")
        }
})

router.post('/', (req, res) => {
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

router.put('/:id', (req, res) => {
    const {id} = req.params

    pool.query(`SELECT * FROM authors WHERE id_author = ${id}`, (err, [author]) => {
        if (err) return res.status(500).send("En estos momentos estamos trabajando para darte lo mejor")
        if(!author) return res.status(404).send("No se ha encontrado el autor")
        
        const scheme = Joi.object({
            name: Joi.string(),
            surname: Joi.string(),
            email: Joi.string().email(),
            image: Joi.string()
        }).min(1)
    
        const {error} = scheme.validate(req.body) 
        if (error) return res.status(400).send(error.details[0].message)
    
        pool.query('UPDATE authors SET ? WHERE id_author = ?', [req.body, author.id_author], (err, rows) => {
            if (err) return res.status(500).send("En estos momentos estamos trabajando para darte lo mejor de lo mejor")

            res.status(200).json({...author, ...req.body})
        })
    })
})


router.delete('/:id', (req, res) => {
    const {id} = req.params

    pool.query(`SELECT * FROM authors WHERE id_author = ${id}`, (err, [author]) => {
        if (err) return res.status(500).send("En estos momentos estamos trabajando para darte lo mejor")
        if(!author) return res.status(404).send("No se ha encontrado el autor")
        
        pool.query(`DELETE FROM authors WHERE id_author = ${id}`, (err, rows) => {
            if (err) return res.status(500).send("En estos momentos estamos trabajando para darte lo mejor de lo mejor")

            res.status(200).send(author)
        })
    })
})

router.get('/ping', (req, res) => {
    // pool.query('SELECT "pong" as ping', (err, rows) => {
    //     res.send(rows)
    // })

    res.send("pong")
})


module.exports = router