// // Andina 2
// // Ruben 4
// // Rufino 1
// // Fulgencio 1
// // Felipe 0.5
// // Ismael 1
// // Dani 4
// // Rafa 1
// // Neiva 10

// true && false // => false

// ((true && false) || true) // => 


// let x = 10; 
// let y = (x > 10) ? 1 : 0; // => 0


// let x = (2 + 3) * (4 + 5) // => 45


// ¿Qué expresiones devuelven true? // => d

// a. '1' === 1; 
// b. 1 == 1
// c. 1 === 1
// d. b and c


// let x = (1 == true); 




// let x = 10;
// let y = (x > 5) && (x < 15) // => y

// console.log(y);

// let x = 5; 
// x += 3; // => 8

// let x = 10;
// let y = x++; // => 10

// let x = 1; 
// let y = x !== 2 // => true

// console.log(y)


// /* Escribe una función que tome 2 numeros y obtenga el maximo de los dos */

// function max(a, b) {

//     return (a > b) ? a : b 
    
// }



// /* Escribe una funcion que tome un ancho y un alto y devuelva si es "landscape" o "portrait" en String */


// function isLandscape(width, height) {
//     return (width > height) ? "landscape" : "portrait" 
// }



/* Escribe una función que obtenga un numero y imprima un triangulo de estrellas */ 

// *
// **

// function tamariz(totalLineas) {
//     for (let linea = 1; linea <= totalLineas; linea++) {
//         let asteriscos = ""

//         for (let i = 1; i <= linea; i++)
//             asteriscos += "*"        
        
//         console.log(asteriscos);
//     }
// }

// tamariz(5)

// *
// * *


//tamariz(2)

// 1 
// 12 
// 123 
// 1234 
// 12345
// 123456
// 1234567





/* Escribe una función que obtenga un min y un max (Numbers) y devuelva un array con todos los enteros del min al max */ 




function fillRange(min, max) {
    if (min > max) throw("Error min mayor que max")
    if(min > Math.floor(min))
        min++

    const arrayRange = [] 
    
    for (let i = min; i <= max; i++)
        arrayRange.push(i)
    
    return arrayRange.map(item => Math.floor(item))
}

fillRange(-1, 3) // => [-1, 0, 1, 2, 3]
fillRange(2, 2)  // => [2]
//fillRange(7, 0) // => error()
fillRange(0.3, 7.4) // => [1, 2, 3, 4, 5, 6, 7]
fillRange(0, 7.4) // => [0, 1, 2, 3, 4, 5, 6, 7]

0.3 > 0  1.3 7.4 







/* Escribe una funcion que obtenga un array de valores y devuelva un number con la cuenta de todos los Truthy */

//  function countTruty(array) {
//      let count = 0
//      array.forEach(element => {
//          if (element)
//              count++
//      });

   

//     return count
// }


// function countTruty(array) {
//     return array.reduce((previousValue = 0, element) => 
//         (element) 
//             ? ++previousValue 
//             : previousValue)
// }


// const elArray = [1, true, 0, undefined, {namecito: "Pedro"}, [1, 2, 3], []]

// const result = countTruty(elArray)
// console.log(result)


// 6 let x = (1 == true);

/* 7 
let x = 10;
let y = (x > 5) && (x < 15)
*/

/* 8 

let x = 5; 
x += 3;

*/

/* 9 

let x = 10;
let y = x++;

*/


/*  10

let x = 1; 
let y = x !== 2

*/


/* Escribe una función que tome 2 numeros y obtenga el máximo de los dos */


/* Escribe una funcion que tome un ancho y un alto y devuelva si es "landscape" o "portrait" en String

/* Escribe una funcion que obtenga un arroy de valores y de vuelva un number con la cuenta de todos os Truthy */


/* Escribe una función que obtenga un numero y devuelva un triangulo de estrellas 

showStars(2)

*
**

showStars(7)

*
**
***
****
*****
******
*******

*/


/* Escribe una función que obtenga un min y un max (Numbers) y devuelva un array con todos los enteros del min al max


