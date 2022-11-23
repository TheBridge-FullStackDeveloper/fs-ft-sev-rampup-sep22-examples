const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')

const app = express()


app.use(helmet())
app.use(morgan('tiny'))
app.use(express.json()) // Instala middlewares

app.use(function (req, res, next) {
    console.log("Logger: Nueva Solicitud")
    next()
})

app.use(function (req, res, next) {
    console.log("AUTH: Usuario logeado")
    next()
})

//app.use(express.static('public'))
// Un middleware es una función ejecutada en la tubería o cadena de operaciones que suceden en un cliclo de solicitud-respuesta de express. 

//[middleware (express.json()), next()] ------- [response]


app.get('/ping', (req, res) => {
    console.log("NO LLEGA");
    res.send("pong")
})

app.listen(3000)