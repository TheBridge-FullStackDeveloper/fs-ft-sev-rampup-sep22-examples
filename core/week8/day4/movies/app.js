const express = require('express')

const app = express()

const movies = require('./movies')
const genres = require('./genres')

app.use(express.static('public'))

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/movies', (req, res) => {
    res.render('movies', { data: {
        title: "Peliculas",
        path: req.path,
        movies: movies.getMovies()
    }})
})

app.get('/movies/:genre', (req, res) => {
    res.render('movies', {data: {
        title: "Peliculas de " + req.params.genre,
        path: req.path,
        movies: movies.getMoviesByGenre(req.params.genre)
    }})
})

app.get('/movie/:title', (req, res) => {
    res.render('movie', {data: {
        title: "Ficha de " + req.params.title,
        path: req.path,
        movie: movies.getMovieByTitle(req.params.title)
    }})
})

app.get('/genres', (req, res) => {
    res.render('genres', {data: {
        title: "Generos",
        path: req.path,
        genres: genres.getGenres()
    }})
})

app.get('*', (req, res) => {
    res.send("404")    
})

app.listen(3000, () => {
    console.log("Server on");
})
