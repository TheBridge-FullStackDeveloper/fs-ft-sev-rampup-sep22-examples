const estudiantes = [
    {nombre: "Marcelo", cv: "marcelo.pdf" , notas: [5,9,9,3]},
    {nombre: "Dani", cv: "dani.pdf" , notas: [3,2,9,9]},
    {nombre: "Fulgencio", cv: "marcelo.pdf" , notas: [8,7,7,6]},
    {nombre: "Andina", cv: "marcelo.pdf" , notas: [3,8,5,1]},
    {nombre: "Rufino", cv: "marcelo.pdf" , notas: [2,1,0,10]}
]

//console.log(estudiantes)

for (let i = 0; i < estudiantes.length; i++) {
    console.log(estudiantes[i].nombre)
} 

// Devuelve undefined
estudiantes.forEach((estudiante) => console.log(estudiante.nombre))

//MAP
// Devuelve un array nuevo
const nuevoArray = estudiantes.map((estudiante, k) => ({...estudiante, numeroEstudiante: ++k}));
console.log(nuevoArray)


// filter
// Devuelve un array nuevo
const filterArray = estudiantes.filter((estudiante) => {
    return estudiante.notas.includes(9)  
});
console.log(filterArray)

// filter

// Devuelve true o false
const someBooleano = estudiantes.some((estudiante) => {
    return estudiante.notas.includes(11)  
})
    console.log(someBooleano)

// Devuelve un item del array
const item = estudiantes.find((estudiante) => {
    return estudiante.notas.includes(9)  
});
console.log(item)





