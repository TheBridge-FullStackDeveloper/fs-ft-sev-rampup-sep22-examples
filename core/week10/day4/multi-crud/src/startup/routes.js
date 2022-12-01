require('express-async-errors')

const errors = require('../middleware/errors')
const movies = require('../routes/movies')
const genres = require('../routes/genres')
const rentals = require('../routes/rentals')
const express = require('express')

module.exports = function (app) {
    app.use(express.json())
    
    app.use('/movies', movies)
    app.use('/genres', genres)
    app.use('/rentals', rentals)

    app.get('/ping', (req, res) => {
        res.send('pong')
    })
    
    app.use(errors)
}