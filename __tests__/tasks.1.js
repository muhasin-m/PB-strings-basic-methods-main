const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('1. parkWalkStr string', () => {
    test('The variable "parkWalkStr" should exist', () => {
        const parkWalkStr = rewire('../solution').__get__('parkWalkStr');
        expect(parkWalkStr).toBeDefined();
    });
    test('parkWalkStr should contain string', () => {
        const parkWalkStr = rewire('../solution').__get__('parkWalkStr');
        expect(typeof parkWalkStr).toBe('string');
    })
    test('should print the word "park" to the console', () => {
        require('../solution');
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/parK/i));
    })
})