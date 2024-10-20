const statement = require('../src/chapter01/code');
const plays = require('../src/chapter01/plays.json');
const invoices = require('../src/chapter01/invoices.json');

describe('statement', () => {

    it('should return a correct statement for a given invoice and plays', () => {
        const expectedStatement =
            "Statement for BigCo\n" +
            " Hamlet: $650.00 (55 seats)\n" +
            " As You Like It: $580.00 (35 seats)\n" +
            " Othello: $500.00 (40 seats)\n" +
            "Amount owed is $1,730.00\n" +
            "You earned 47 credits\n";

        const result = statement(invoices, plays);

        expect(result).toBe(expectedStatement);
    });

    it('should throw an error for unknown play type', () => {
        const invalidPlays = {
            ...plays,
            "as-like": { "name": "As You Like It", "type": "unknownType" }
        };

        expect(() => {
            statement(invoices, invalidPlays);
        }).toThrow('unknown type: unknownType');
    });
});
