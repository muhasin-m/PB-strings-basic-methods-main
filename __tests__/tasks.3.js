const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('3. earthlingsStr string', () => {
    test('The variable "earthlingsStr" should exist', () => {
        const earthlingsStr = rewire('../solution').__get__('earthlingsStr');
        expect(earthlingsStr).toBeDefined();
    });
    test('earthlingsStr should contain string', () => {
        const earthlingsStr = rewire('../solution').__get__('earthlingsStr');
        expect(typeof earthlingsStr).toBe('string');
    })
    test('should print the text lower cased to the console', () => {
        require('../solution')
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/hello earthling/));
    })
})