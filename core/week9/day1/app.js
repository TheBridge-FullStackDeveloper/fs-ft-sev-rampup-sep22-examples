const Joi = require('joi');
const mysql2 = require('mysql2')

const express = require('express')

const app = express()

app.use(express.json())

const catedrales = [
    { id: 1, name:"Catedral de Sevilla", city: "Sevilla"},
    { id: 2, name:"Notre dame", city: "París"},
    { id: 3, name:"San Pedro", city: "Vaticano"}
]

app.get('/catedrales', (req, res) => {
    res.json(catedrales)
})

app.get('/catedral/:id', (req, res) => {
    const catedral = catedrales.find((catedral) => catedral.id === +req.params.id)

    if (!catedral) {
        res.status(404).send("No hay catedrales con esa id")
        return
    }

    res.json(catedral)
})

app.post('/catedral', (req, res) => { 
    // Obtener la próxima id y crear nuevo objeto catedral
    const id = catedrales.length + 1
    const {name, city } = req.body

    const newCatedral = {id, name, city}

    const schema = Joi.object({
        name: Joi.string().required(),
        city: Joi.string()
            .min(2)
            .required()
    })

    const {error} = schema.validate(req.body);
    if (error) return res.status(401).json(error.details[0].message)
    
    // Añadir el objeto
    catedrales.push(newCatedral)

    //Dar respuesta al cliente
    res.status(201).json(newCatedral)    
})

app.get('/ping', (req, res) => {
    res.status(200).json({ping: "pong"})
})

app.post('/ping', (req, res) => {
    console.log(req.body);
    res.status(200).json({ping: "post pong"})
})


app.listen(3000)