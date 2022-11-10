const fs = require("fs")

const text = "Quijote en verso"

// fs.writeFile("./quijote.txt", text, function(err) {
//     console.log("Fichero creado con contenido")
// })

fs.writeFile("./hello.txt", "Hola fichero", function(err) {
    console.log("Fichero creado con contenido")

    if(err) {
        console.log(err)
    }
})

fs.readFile("./quijote.txt", 'utf8', function(err, data) {
    console.log(data)
})


console.log("Esto antes")