const {absoluteValue, greeting} = require('../src')

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