const mongoose = require('mongoose');

async function connection() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/movies')


    // 1. Scheme - 
    // Forma que toma el documento en la base de datos (propiedades y tipos)
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
   

    // 2. Modelo de mongoose
    const Movie = mongoose.model('Movie', movieSchema)

    // 3. Insert - Crear documento en colección

    const movie = new Movie({
      title: "Terminator 2",
      price: 30,
      director: "James Cameron",
      plot: "Increible",
      actors: "Arnaldo Schwaznegger",
      imagen: "arnaldo.jpg",
      date: "1991-10-09"
    })

    const movie2 = new Movie({
      title: "Terminator",
      price: 40,
      director: "James Cameron",
      plot: "Maravillosa",
      actors: "Arnaldo Schwaznegger",
      imagen: "arnaldo.jpg",
      date: "1989-10-09"
    })

    const movie3 = new Movie({
      title: "Titanic",
      price: 100,
      director: "James Cameron",
      plot: "Un barco debilucho",
      actors: "Leonardo DiCaprio",
      imagen: "leonardo.jpg",
      date: "2002-10-09"
    })

    await movie.save()
    await movie2.save()
    await movie3.save()

    console.log("creadas");

  } catch (err) {
    console.log("no vamos", err)
  }
}

connection()