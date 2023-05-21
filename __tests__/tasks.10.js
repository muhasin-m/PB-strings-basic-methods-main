const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('10. Capitalize first Letter', () => {
    test('The variable "foxStr" should exist', () => {
        const foxStr = rewire("../solution").__get__("foxStr");
        expect(foxStr).toBeDefined()
    });
    test('The variable "foxStr" should have correct text', () => {
        const foxStr = rewire("../solution").__get__("foxStr");
        expect(foxStr).toBe("the quick brown fox")
    });
    test('should print foxStr capitalized', () => {
        require('../solution')
        const foxStr = rewire("../solution").__get__("foxStr");
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/The quick brown fox/));
    })
})