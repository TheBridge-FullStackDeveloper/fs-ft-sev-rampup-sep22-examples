const Joi = require('joi')

const pool = require('../db')

require('express-async-errors')
const express = require('express')
const router = express.Router()

  
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT title, content, date, category, name, surname, image  FROM authors AS A INNER JOIN entries AS E ON A.id_author = E.id_author')
         
        res.json(rows)

    } catch (err) {
        res.status(500).send("Tranqui lo solucionamos rápido")
    }
})

router.put('/:title', (req, res) => {
    pool.query(`SELECT * FROM entries WHERE title = REPLACE("${req.params.title}", "-", " ")`, (err, [entry]) => {
       if (err) return res.status(500).send("En estos momentos estamos trabajando para darte lo mejor")
       if(!entry) return res.status(404).send("No se ha encontrado una entrada con el título")

        const scheme = Joi.object({
            title: Joi.string(),
            content: Joi.string(),
            date: Joi.string(),
            id_author: Joi.number().min(1),
            category: Joi.string()
        }).min(1)
    
        const {error} = scheme.validate(req.body) 
        if (error) return res.status(400).send(error.details[0].message)
    
        pool.query('UPDATE entries SET ? WHERE id_entry = ?', [req.body, entry.id_entry], (err, rows) => {
            if (err) return res.status(500).send("En estos momentos estamos trabajando para darte lo mejor de lo mejor")

            res.status(200).json({...entry, ...req.body})
        })
    })
})

router.delete('/:title', (req, res) => {
    pool.query(`SELECT * FROM entries WHERE title = REPLACE("${req.params.title}", "-", " ")`, (err, [entry]) => {
        if (err) return res.status(500).send("En estos momentos estamos trabajando para darte lo mejor")
        if(!entry) return res.status(404).send("No se ha encontrado una entrada con el título")
        
        pool.query(`DELETE FROM entries WHERE id_entry = ${entry.id_entry}`, (err, rows) => {
            if (err) return res.status(500).send("En estos momentos estamos trabajando para darte lo mejor de lo mejor")

            res.status(200).send(entry)
        })
     })
})

module.exports = router