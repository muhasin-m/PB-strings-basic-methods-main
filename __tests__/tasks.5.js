const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('5. niceShoesStr string', () => {
    test('The variable "niceShoesStr" should exist', () => {
        const niceShoesStr = rewire('../solution').__get__('niceShoesStr');
        expect(niceShoesStr).toBeDefined();
    });
    test('niceShoesStr should contain string', () => {
        const niceShoesStr = rewire('../solution').__get__('niceShoesStr');
        expect(typeof niceShoesStr).toBe('string');
    })
    test('Should print a Boolean value if text contains the letter `n` or `l`', () => {
        require('../solution')
        const niceShoesStr = rewire('../solution').__get__('niceShoesStr');
        const hasN = niceShoesStr.includes('n')
        const hasL = niceShoesStr.includes('l')
        if (hasN || hasL) {
            expect(consoleSpy).toHaveBeenCalledWith(true);
        } else {
            expect(consoleSpy).toHaveBeenCalledWith(false);
        }
    });
})