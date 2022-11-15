const pokemons = require("./pokemons")

const express = require("express")

const app = express()

app.get("/pokemons/:genre", (req, res) => {
    console.log(req.params['genre']);
 
    res.json(pokemons.getPokemons())
})

app.listen(3000)





