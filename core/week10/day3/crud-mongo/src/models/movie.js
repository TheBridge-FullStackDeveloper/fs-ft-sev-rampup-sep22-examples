const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 50,
      trim: true
      // match: /pattern/
    },
    isSample: Boolean ,
    price: {
      type: Number,
      required: {
        validate: function () {
            return !this.isSample
          },
        message: "Necesitas meter un precio porque es una muestra"
      },
      get: v => v + " €",
      set: v => Math.floor(v)
    },
    director: {
      type: String,
      required: true
    },
    genre: {
      type: String,
      enum: {
        values: ["Comedia", "Serio"],
        message: 'No está dentro de los generos permitidos'
      } 
    },
    plot:   String,
    actors: String,
    imagen: String,
    date: Date,
  }, {
    timestamps: true
  });

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie