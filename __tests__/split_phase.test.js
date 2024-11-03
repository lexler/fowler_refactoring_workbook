const { priceOrder } = require('../src/chapter06/split_phase');

describe('priceOrder', () => {
    // Mock product and shipping method objects
    const product = {
        basePrice: 10,
        discountThreshold: 5,
        discountRate: 0.1
    };

    const shipping = {
        discountThreshold: 100,
        discountedFee: 5,
        feePerCase: 10
    };

    test('calculates price with no discounts applied', () => {
        const quantity = 2;

        const result = priceOrder(product, quantity, shipping);

        expect(result).toBe(40); // 20 - 0 + 20
    });

    test('calculates price with quantity discount applied', () => {
        const quantity = 8;

        const result = priceOrder(product, quantity, shipping);

        expect(result).toBe(157); // 80 - 3 + 80
    });

    test('calculates price with shipping discount applied', () => {
        const quantity = 12;

        const result = priceOrder(product, quantity, shipping);

        expect(result).toBe(173); // 120 - 7 + 60
    });

    test('handles zero quantity order', () => {
        const result = priceOrder(product, 0, shipping);

        expect(result).toBe(0);
    });

    test('handles large quantity orders', () => {
        const quantity = 1000;

        const result = priceOrder(product, quantity, shipping);

        expect(result).toBeGreaterThan(0);
    });
});
