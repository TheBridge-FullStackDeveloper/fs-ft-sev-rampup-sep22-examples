const express = require('express')

const app = express()

const movies = require('./movies')
const genres = require('./genres')

app.use(express.static('public'))

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/movies', (req, res) => {
    res.render('movies', {movies: movies.getMovies()})
})

app.get('/movies/:genre', (req, res) => {
    res.render('movies', {movies: movies.getMoviesByGenre(req.params.genre)})
})

app.get('/genres', (req, res) => {
    res.render('genres', {genres: genres.getGenres()})
})

app.get('*', (req, res) => {
    res.send("404")    
})

app.listen(3000, () => {
    console.log("Server on");
})
