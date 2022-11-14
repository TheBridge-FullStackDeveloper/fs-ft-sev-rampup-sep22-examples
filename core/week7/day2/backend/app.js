const express = require("express")
const path = require('path');

const app = express()

app.use(express.static('public'))


app.get('/quienes-somos', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/quienes-somos.html'))
})

app.get('/', (req, res) => {
    console.log("HOLA SOY EL ROOT")
    res.send("<h1>soy root!!!</h1>")
})

app.listen(3001, () => console.log('Example app listening on port 3001!'))