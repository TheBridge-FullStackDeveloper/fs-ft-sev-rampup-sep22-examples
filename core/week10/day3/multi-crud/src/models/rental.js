const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const {movieSchema} = require('./movie')
const mongoose = require('mongoose')

const rentalSchema = new mongoose.Schema({
    movie: {
      type: movieSchema,
      required: true
    },
    returnDate: {
        type: Date,
        required: true
    }
  }, {
    timestamps: true
  });

const Rental = mongoose.model('Rental', rentalSchema)

function validateRental(rental){
    const schema = Joi.object({
      movieId: Joi.objectId().required(),
      returnDate: Joi.string(),
    })
  
    return schema.validate(rental)
  }
  
  exports.Rental = Rental
  exports.rentalSchema = rentalSchema
  exports.validate = validateRental
