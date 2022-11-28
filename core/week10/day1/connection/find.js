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

async function connection() {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/movies')
      console.log("Tenemos conexión con la db...");
    } catch (err) {
        console.log("ERROR FATAL", err);
    }
}

async function findQuery() {
    await connection()

    // Operadores de comparación
    // -----------------------
    // https://www.mongodb.com/docs/manual/reference/operator/query-comparison/

    //const result = await Movie.find({plot: 'Maravillosa'})
    //const result = await Movie.find({ plot: {$ne: 'Maravillosa'}})

    //const result = await Movie.find({title: {$regex: /^Terminator/}})
    
    //const result = await Movie.find({price: {$lte: 40, $gt: 35 }})
    
    //const result = await Movie.find({price: {$in: [10, 20, 40, 100]}})

    // REGEX COMPARATOR
    // -----------------------
    //const result = await Movie.find({imagen: {$regex: /.*.jpg$/}})

    // LOGICOS COMPARATOR
    // -----------------------
    // https://www.mongodb.com/docs/manual/reference/operator/query-logical/

    //Cuando el precio > 35  OR actors != Arnaldo

    //const result = await Movie.find({$or: [{price: {$gt: 35}},{actors: { $ne:'Arnaldo Schwaznegger'}}]})

    //const result = await Movie.find({$and: [{price: {$gt: 35}},{actors: { $ne:'Arnaldo Schwaznegger'}}]})

    // LIMIT AND SORTING
    // -----------------------
    // const result = await Movie.find({})
    //                           .sort({price: -1})
    //                           .limit(1)

    //const result = await Movie.find({})
                              // .sort('price')
                              // .limit(1)     
                                       
    //const result = await Movie.find({})
                              //.sort('price title')
    // COUNTING
    // -----------------------
    // const result = await Movie.find({})
    //                            .sort('price title')
    //                           //.limit(2)
    //                           .count()

    // SELECCIONAR CAMPOS
    // -----------------------
    // const result = await Movie.find({})
    //                           .sort('price title')
    //                           .select({title: 1})
    
    const result = await Movie.find({})
                               .sort('price title')
                               .select('price title')

    console.log(result);  
}

findQuery()

async function getMovie(id) {
  await connection()

  const result = await Movie.findById(id)

  console.log(result);
}

//getMovie('638487aff2026f4f99df2619')