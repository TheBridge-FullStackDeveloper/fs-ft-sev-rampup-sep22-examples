const {Movie, validate} = require('../models/movie')
const express = require('express')
const router = express.Router()


router.get('/', async (req, res) => {
    const movies = await Movie.find({}).populate('genres', 'name -_id')

    res.send(movies)
})

router.post('/', async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
      
    const movie = new Movie(req.body)
    await movie.save()
    
    res.send(movie)
})

router.put('/:id', async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.send(movie)
})

router.delete('/:id', async (req, res) => {
    const movie = await Movie.findByIdAndDelete(req.params.id)

    res.send(movie)
})

module.exports = router