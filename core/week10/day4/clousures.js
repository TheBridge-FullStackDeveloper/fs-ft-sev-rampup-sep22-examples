
function sumarNumero(numero) {
    return function (otroNumero) {
        return otroNumero + numero
    }
}

let sumaDos = sumarNumero(2)
let sumaTres = sumarNumero(3)

console.log(sumaDos(10))

console.log(sumaTres(10))
