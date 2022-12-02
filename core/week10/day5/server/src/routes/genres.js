const {Genre, validate} = require('../models/genre')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    const genres = await Genre.find({})  

    res.send(genres)
})

module.exports = router