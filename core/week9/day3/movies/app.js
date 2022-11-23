const express = require('express')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/movies', (req, res) => {
    //Aquí tu código

    res.render('movies', { data: {
        title: "Peliculas",
        path: req.path,
        movies
    }})
})

app.get('/movies/:genre', (req, res) => {
    //Aquí tu código
    
    res.render('movies', {data: {
        title: "Peliculas de " + req.params.genre,
        path: req.path,
        movies
    }})
})

app.get('/movie/:title', (req, res) => {
    //Aquí tu código
    
    res.render('movie', {data: {
        title: "Ficha de " + req.params.title,
        path: req.path,
        movie
    }})
})

app.get('/genres', (req, res) => {
    //Aquí tu código

    res.render('genres', {data: {
        title: "Generos",
        path: req.path,
        genres
    }})
})

app.get('*', (req, res) => {
    res.send("404")    
})

app.listen(3000, () => {
    console.log("Server on");
})
