const http = require("http")


const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url === "/Cualquiercosa"){

        res.setHeader("Content-Type", "text/html")
        res.write('<html><head><link rel="stylesheet" href="estilos.css"></head><body>hola</body></html>')
        res.end()
    } else if (req.url === "/estilos.css") {
       
        res.setHeader("Content-Type", "text/css")
        res.write('body { color: red;}')
        res.end()
    }
    
})

server.listen(3000, () => {
    console.log("ESTOY YA ESCUCHANDO")
})



