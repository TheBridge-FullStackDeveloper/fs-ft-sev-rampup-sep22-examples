module.exports.absoluteValue = (number) => {
    if (number >= 0) return number

    return -number
} 

module.exports.greeting = (name) => {
    return "Buen día " + name
} 

module.exports.fizzBuzz = (number) => {
    if (!+number || number < 0) throw new Error ("La entrada no es un número mayor que cero")
    
    if(number % 5 === 0 && number % 3 === 0) 
        return "FizzBuzz"

    if(number % 3 === 0)
        return "Fizz" 
    
    if(number % 5 === 0)
        return "Buzz" 
    
    return number
}

