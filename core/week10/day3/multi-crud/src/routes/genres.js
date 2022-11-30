const {Genre, validate} = require('../models/genre')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    const genres = await Genre.find({})  

    res.send(genres)
})

router.post('/', async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const genre = new Genre(req.body)
   
    await genre.save()
    
    res.send(genre)
})

router.put('/:id', async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    
    const genre = await Genre.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.send(genre)
})

router.delete('/:id', async (req, res) => {
    const genre = await Genre.findByIdAndDelete(req.params.id)

    res.send(genre)
})

module.exports = router