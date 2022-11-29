const Movie = require('../models/movie')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    const movies = await Movie.find({})  

    res.send(movies)
})

router.post('/', async (req, res) => {
    const movie = new Movie(req.body)

    const newMovie = await movie.save()

    res.send(newMovie)
})

router.put('/:id', async (req, res) => {
    const movie = await Movie.findOneAndUpdate({_id: req.params.id}, req.body)

    res.send(movie)
})

router.delete('/:id', async (req, res) => {
    const movie = await Movie.findOneAndDelete({_id: req.params.id})

    res.send(movie)
})

module.exports = router