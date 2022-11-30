const movies = require('./routes/movies')
const express = require('express')

const app = express()

require('./db')()

app.use(express.json())

app.use('/movies', movies)

app.get('/ping', (req, res) => {
    res.send('pong')
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))




