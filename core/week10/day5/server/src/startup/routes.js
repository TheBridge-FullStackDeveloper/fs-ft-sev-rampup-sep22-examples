require('express-async-errors')

const errors = require('../middleware/errors')
const genres = require('../routes/genres')

const helmet = require("helmet");
const compression = require('compression')
const express = require('express')

module.exports = function (app) {
    app.use(helmet()); // Capa de seguridad sobre el servidor (seguridad)
    app.use(express.json())
    
    app.use('/genres', genres)

    app.get('/ping', (req, res) => {
        res.send('pong')
    })
    
    app.use(errors)
    app.use(compression()) // comprime las respuestas del servidor en gzip (Seguridad y performance)
}