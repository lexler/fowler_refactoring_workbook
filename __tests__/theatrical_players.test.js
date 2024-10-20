const { statement, htmlStatement } = require('../src/chapter01/theatrical_players');
const plays = require('../src/chapter01/plays.json');
const invoice = require('../src/chapter01/invoices.json');

describe('statement', () => {

    it('should return a correct statement for a given invoice and plays', () => {
        const expectedStatement =
            "Statement for BigCo\n" +
            " Hamlet: $650.00 (55 seats)\n" +
            " As You Like It: $580.00 (35 seats)\n" +
            " Othello: $500.00 (40 seats)\n" +
            "Amount owed is $1,730.00\n" +
            "You earned 47 credits\n";

        const result = statement(invoice, plays);

        expect(result).toBe(expectedStatement);
    });

    it('should throw an error for unknown play type', () => {
        const invalidPlays = {
            ...plays,
            "as-like": { "name": "As You Like It", "type": "unknownType" }
        };

        expect(() => {
            statement(invoice, invalidPlays);
        }).toThrow('unknown type: unknownType');
    });
});

describe('htmlStatement', () => {
    it('should return a correct HTML statement for a given invoice and plays', () => {
        const expectedHtmlStatement =
            `<h1>Statement for BigCo</h1>\n` +
            `<table>\n` +
            `<tr><th>play</th><th>seats</th><th>cost</th></tr>\n` +
            ` <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>\n` +
            ` <tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>\n` +
            ` <tr><td>Othello</td><td>40</td><td>$500.00</td></tr>\n` +
            `</table>\n` +
            `<p>Amount owed is <em>$1,730.00</em></p>\n` +
            `<p>You earned <em>47</em> credits</p>\n`;

        const result = htmlStatement(invoice, plays);

        expect(result).toBe(expectedHtmlStatement);
    });

    it('should throw an error for unknown play type in HTML statement', () => {
        const invalidPlays = {
            ...plays,
            "as-like": { "name": "As You Like It", "type": "unknownType" }
        };

        expect(() => {
            htmlStatement(invoice, invalidPlays);
        }).toThrow('unknown type: unknownType');
    });
});
