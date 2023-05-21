const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('4. jsStr string', () => {
    test('The variable "jsStr" should exist', () => {
        const jsStr = rewire('../solution').__get__('jsStr');
        expect(jsStr).toBeDefined();
    });
    test('jsStr should contain string', () => {
        const jsStr = rewire('../solution').__get__('jsStr');
        expect(typeof jsStr).toBe('string');
    })
    test('should print sub string to the console', () => {
        require('../solution')
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/aSc/));
    })
})