const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('9. Description about yourself', () => {
    test('The variable "firstName" should exist', () => {
        const firstName = rewire("../solution").__get__("firstName");
        expect(firstName).toBeDefined()
    });
    test('The variable "city" should exist', () => {
        const city = rewire("../solution").__get__("city");
        expect(city).toBeDefined()
    });
    test('The variable "job" should exist', () => {
        const job = rewire("../solution").__get__("job");
        expect(job).toBeDefined()
    });
    test('should print sentence containing values of "firstName", "city" and "job"', () => {
        const firstName = rewire("../solution").__get__("firstName");
        const city = rewire("../solution").__get__("city");
        const job = rewire("../solution").__get__("job");
        const regex = new RegExp(`(?=.*${firstName})(?=.*${city})(?=.*${job})`);
        require("../solution");

        const outputFound = consoleSpy.mock.calls.find(call => regex.test(call.join(' ')))
    })
})
