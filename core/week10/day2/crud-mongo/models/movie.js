const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title:  String,
    price: Number,
    director: String,
    plot:   String,
    actors: String,
    imagen: String,
    date: Date,
    regDate: { type: Date, default: Date.now }
  });

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie