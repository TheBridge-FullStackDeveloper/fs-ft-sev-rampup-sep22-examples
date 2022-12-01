const {Rental, validate} = require('../models/rental')
const {Movie} = require('../models/movie')

const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    const rentals = await Rental.find({}).populate('genres', 'name -_id')

    res.send(rentals)
})

router.post('/', async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const movie = await Movie.findById(req.body.movieId).select('-genres')
    if (!movie) return res.status(400).send('No se encuentra la pelicula')

    const rental = new Rental({
        movie: {
            _id: movie._id,
            title: movie.title 
        },
        returnDate: req.body.returnDate
    })
   
    await rental.save()
    
    res.send(rental)
})

router.put('/:id', async (req, res) => {
    const rental = await Rental.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.send(rental)
})

router.delete('/:id', async (req, res) => {
    const rental = await Rental.findByIdAndDelete(req.params.id)

    res.send(rental)
})

module.exports = router