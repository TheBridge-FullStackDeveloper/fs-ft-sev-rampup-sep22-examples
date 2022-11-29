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
    // query first approach
    const movie = await Movie.findById(req.params.id)
    if (!movie) return res.status(404).send('No lo encuentro')
    
    // movie.title = "Perros"
    // movie.plot = "Vamos"
    // movie.price = 2

    // movie.set({
    //     title: "Perros",
    //     plot: "Vamos",
    //     price: 2
    // })

    movie.set(req.body)

    await movie.save()

    res.send(movie)
})

router.put('/:id', async (req, res) => {
    // update first approach
    const movie = await Movie.findOneAndUpdate({_id: req.params.id}, req.body)

    res.send(movie)
})

router.delete('/', async (req, res) => {
    const movie = new Movie(req.body)

    const newMovie = await movie.save()

    res.send(newMovie)
})

module.exports = router