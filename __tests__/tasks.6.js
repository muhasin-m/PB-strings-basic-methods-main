const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('6. old_newStr string', () => {
    test('The variable "newStr" should exist', () => {
        const newStr = rewire('../solution').__get__('newStr');
        expect(newStr).toBeDefined();
    });
    test('The variable "oldStr" should exist', () => {
        const oldStr = rewire('../solution').__get__('oldStr');
        expect(oldStr).toBeDefined();
    });
    test('newStr should contain modified string', () => {
        require('../solution')
        const [newStr, oldStr] = [rewire('../solution').__get__('newStr'), rewire('../solution').__get__('oldStr')];
        expect(oldStr).not.toBe(newStr);
    })
})