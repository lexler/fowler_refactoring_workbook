// product = {
//     "basePrice": 10,
//     "discountRate": 2,
//     "discountedFee": 1,
//     "discountThreshold": 25
// }
//
// shippingMethod = {
//     "feePerCase": 20,
//     "discountThreshold": 10,
//     "discountedFee": 10
// }

function priceOrder(product, quantity, shippingMethod) {
    const priceData = calculatePricingData(product, quantity);
    return applyShipping(priceData, shippingMethod);
}

function calculatePricingData(product, quantity) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;
    return {
        basePrice: basePrice,
        quantity: quantity,
        discount: discount
    }
}

function applyShipping(priceData, shippingMethod) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    return priceData.basePrice - priceData.discount + shippingCost;
}

module.exports = { priceOrder };
