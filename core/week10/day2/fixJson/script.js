const fs = require('fs')

let data = require('./landings.json')

data.forEach((item) => {
    item.mass = +item.mass
    item.id = +item.id
    item.reclat = +item.reclat
    item.reclong = +item.reclong
   
    if(!item.geolocation) return

    item.geolocation.latitude = +item.geolocation.latitude
    item.geolocation.longitude = +item.geolocation.longitude
     
})

data = JSON.stringify(data, null, 4)

fs.writeFile('data.json', data, () => {
    console.log("json grabado")
})
