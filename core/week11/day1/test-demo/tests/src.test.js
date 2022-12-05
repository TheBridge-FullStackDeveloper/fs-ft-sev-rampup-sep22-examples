const {absoluteValue, greeting, fizzBuzz} = require('../src')

describe('absoluteValue', () => {
    it('should return same positive number if it takes positive number', () => {
        const result = absoluteValue(1)

        expect(result).toBe(1)
    })
    
    it('should return same positive number if it takes negative number', () => {
        const result = absoluteValue(-1)

        expect(result).toBe(1)
    })
    
    it('should return 0 if it takes 0', () => {
        const result = absoluteValue(0)

        expect(result).toBe(0)
    })
})

describe('greeting', () => {
    it('should return string with greeting if take a name', () => {
        const result = greeting("Antonio")

        expect(result).toContain("Antonio")
    })
    
})

// Probar el FizzBuzz https://jestjs.io/docs/using-matchers


describe('fizzBuzz', () => {
    it('should return FizzBuzz if it takes a nuumber divisible by 3 and 5', () => {
        const result = fizzBuzz(15)

        expect(result).toBe('FizzBuzz')
    })

    it('should return Fizz if it takes a nuumber divisible by 3', () => {
        const result = fizzBuzz(3)

        expect(result).toBe('Fizz')
    })

    it('should return FizzBuzz if it takes a nuumber divisible by 5', () => {
        const result = fizzBuzz(5)

        expect(result).toBe('Buzz')
    })


    it('should throw an exception if it does not take a number greatter than 0', () => {
     
        expect(() => fizzBuzz(-1)).toThrow()
    })

    it('should throw an exception if it does not take 0', () => {
     
        expect(() => fizzBuzz(0)).toThrow()
    })

    it('should throw an exception if it does not take a number', () => {
     
        expect(() => fizzBuzz("test")).toThrow()
    })
})