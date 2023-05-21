const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('2. helloStr string', () => {
    test('The variable "helloStr" should exist', () => {
        const helloStr = rewire('../solution').__get__('helloStr');
        expect(helloStr).toBeDefined();
    });
    test('helloStr should contain string', () => {
        const helloStr = rewire('../solution').__get__('helloStr');
        expect(typeof helloStr).toBe('string');
    })
    test('should print the text upper cased to the console', () => {
        require('../solution')
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/HELLO WORLD/));
    });
})