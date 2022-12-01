const Joi = require('joi')
const mongoose = require('mongoose')

const genreSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
  }, {
    timestamps: true
  });

const Genre = mongoose.model('Genre', genreSchema)

function validateGenre(genre){
  const schema = Joi.object({
    name: Joi.string().required(),
  })

  return schema.validate(genre)
}

exports.Genre = Genre
exports.genreSchema = genreSchema
exports.validate = validateGenre