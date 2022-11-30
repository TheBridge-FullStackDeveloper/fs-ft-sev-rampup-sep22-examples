const Movie = require('../models/movie')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    const movies = await Movie.find({})  

    res.send(movies)
})

router.post('/', async (req, res) => {
    const movie = new Movie(req.body)
   
    try {
        await movie.save()
    } catch ({errors}) {
        for (field in errors)
            console.log(errors[field].message)
    }
    

    res.send(movie)
})

router.put('/:id', async (req, res) => {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body)

    res.send(movie)
})

router.delete('/:id', async (req, res) => {
    const movie = await Movie.findByIdAndDelete(req.params.id)

    res.send(movie)
})

module.exports = router