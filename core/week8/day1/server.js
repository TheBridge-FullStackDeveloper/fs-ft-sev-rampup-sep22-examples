const express = require("express")

const path = require('path');

const app = express()

app.use(express.static('public'))

app.get('/quienes-somos', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/views/quienes-somos.html'))
})

app.listen(3001, () => console.log('Example app listening on port 3001!'))

server.listen(3000)