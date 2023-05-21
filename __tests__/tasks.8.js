const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('8. boogieNightsStr string', () => {
    test('The variable "boogieNightsStr" should exist', () => {
        const boogieNightsStr = rewire("../solution").__get__("boogieNightsStr");
        expect(boogieNightsStr).toBeDefined()
    });
    test('The variable "boogieNightsStr" length is >= 2', () => {
        const boogieNightsStr = rewire("../solution").__get__("boogieNightsStr");
        expect(boogieNightsStr.length).toBeGreaterThanOrEqual(2);
    });
    test('should print boogieNightsStr with first and last char switched', () => {
        require('../solution');
        const boogieNightsStr = rewire("../solution").__get__("boogieNightsStr");
        const firstLetter = boogieNightsStr[0];
        const lastLetter = boogieNightsStr[boogieNightsStr.length - 1];
        const remainderString = boogieNightsStr.substring(1, boogieNightsStr.length - 1);
        const result = `${lastLetter}${remainderString}${firstLetter}`
        expect(consoleSpy).toHaveBeenCalledWith(result);
    })
})