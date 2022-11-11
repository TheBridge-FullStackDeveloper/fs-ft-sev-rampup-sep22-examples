const http = require("http")
const fs = require("fs")

const port = 3001

http.createServer(function(request, response) {
    console.log("EY")
    if (request.url === "/quienes-somos") {
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>Node is awesome</h1>")
        response.end()
    } else {
        fs.readFile("./perros.json", function(err, data) {
            response.setHeader("Content-Type", "application/json")
            response.end(data)
        })
    }
    
}).listen(port, () => {
    
    console.log(`EL server está escuchando http://localhost:${port}`)
})




