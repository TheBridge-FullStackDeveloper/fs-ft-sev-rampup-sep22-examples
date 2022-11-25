
// TRES FORMAS GESTIONAR asincronía en JS: 

// callbacks
// promesas
// Async/await


// CALLBACKS 
//-----------
function getUser(callbacks) {
    // Simulamos que busca en una fuente de datos
    setTimeout(() => {
        callbacks()
    }, 3000)   
}

// Al pasar el callback como parámetro logramos que la función no bloquee el control y nos ejecute un código de vuelta

getUser(() => {
    console.log({userName: "Manuel"});
})


console.log("hola1");



// PROMISES
//-------
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 3000) 
})

p1
    .then(() => {
        console.log("Resuelto");
    })
    .catch(() => {
        console.log("ERROR");
    })




console.log("Vamos");



