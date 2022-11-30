const Joi = require('joi')
const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 50,
    },
    genres: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre'
    }],
    // genre: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Genre'
    // },
    price: Number,
    director: String,
    plot:   String,
    date: Date,
  }, {
    timestamps: true
  });

const Movie = mongoose.model('Movie', movieSchema)

// https://stackoverflow.com/questions/48720942/node-js-joi-how-to-display-a-custom-error-messages
function validateMovie(movie){
  const schema = Joi.object({
    title: Joi.string().required(),
    genres: Joi.string(),
    price: Joi.number(),
    director: Joi.string(),
    plot: Joi.string(),
    date: Joi.string(),
  })

  return schema.validate(movie)
}

exports.Movie = Movie
exports.movieSchema = movieSchema
exports.validate = validateMovie


