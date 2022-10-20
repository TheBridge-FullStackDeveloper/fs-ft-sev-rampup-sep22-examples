
// High Order Functions
function calcula(numero1, numero2, operacion) {

    return operacion(numero1, numero2)
}

// Callback 
// function suma(a, b) {
//     return a + b
// }

const resultSync = calcula(2, 3, (a, b) => a + b);

console.log(resultSync);


// Callback Hell 
// setTimeout(() => {
//     setTimeout(() => {
//         setTimeout(() => {
//             console.log("hola")

//         }, 1000)
//     }, 2000)
// },3000);