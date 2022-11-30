const movies = require('./routes/movies')
const genres = require('./routes/genres')
const rentals = require('./routes/rentals')
const express = require('express')

const app = express()

require('./db')()

app.use(express.json())

app.use('/movies', movies)
app.use('/genres', genres)
app.use('/rentals', rentals)

app.get('/ping', (req, res) => {
    res.send('pong')
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))

