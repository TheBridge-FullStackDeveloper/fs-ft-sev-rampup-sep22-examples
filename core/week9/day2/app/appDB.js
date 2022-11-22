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

app.get('/catedrales/:id', (req, res) => {
    pool.query('SELECT * from catedrales WHERE IDCatedral = ' + +req.params.id, (err, rows) => {
        if (!rows.length) {
            res.status(404).send("No hay catedrales con esa id")
            return
        }

        return res.json(rows)
    })
})

app.post('/catedrales', (req, res) => { 
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


app.put('/catedrales/:id', (req, res) => {
    const id = +req.params.id

    if(!id) return res.status(400).send("La id no está en formato válido")

    pool.query('SELECT * FROM catedrales WHERE IDCatedral = ' + id, (err, rows) => {
        if(!rows.length) return res.status(404).send("No existe esa catedral en nuestra base de datos")
        if(err) return res.status(500).send("Volvemos en un plis")
               
        const schema = Joi.object({
            name: Joi.string(),
            city: Joi.string().min(2)
        })

        const {error} = schema.validate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        
        const catedral = rows[0]
        const {name, city} = req.body

        if (!name && !city ) return res.status(400).send('No se envió datos de la actualización')

        let sql = `UPDATE catedrales SET IDCatedral = ${id} `
        if (name) {
            sql += `, name = "${name}" `
            catedral.name = name
        }
        if (city) {
            sql += `, city = "${city}" `
            catedral.city = city
        }      
        sql +=  'WHERE IDCatedral = ' + id


        pool.query(sql, (err, rows) => {
            if(err) return res.status(500).send('Espera que solucionemos algo')

            res.json(catedral);
        })
    })
})


app.delete('/catedrales/:id', (req, res) => {
    const id = +req.params.id

    if(!id) return res.status(400).send("La id no está en formato válido")

    pool.query('SELECT * FROM catedrales WHERE IDCatedral = ' + id, (err, rows) => {
        if(!rows.length) return res.status(404).send("No existe esa catedral en nuestra base de datos")
        if(err) return res.status(500).send("Volvemos en un plis")

        const catedral = rows[0]

        pool.query('DELETE FROM catedrales WHERE IDCatedral = ' + id, (err, rows) => {
            res.json(catedral)
        })
    })
})

app.get('/ping', (req, res) => {
    pool.query('SELECT "Pong" AS ping' , function(err, rows) {
        res.json(rows[0])
     })
})

app.listen(3000, () => {
    console.log("Server on");
})