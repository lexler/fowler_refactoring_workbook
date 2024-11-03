// const orderString = ""
// const priceList = []
//
// const orderData = orderString.split(/\s+/)
// const productPrice = priceList[orderData[0].split("-")[1]]
// const orderPrice = parseInt(orderData[1]) * productPrice

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
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;
    priceData = {
        basePrice: basePrice
    }
    price = applyShipping(priceData, shippingMethod, quantity, discount);
    return price;
}

function applyShipping(priceData, shippingMethod, quantity, discount) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = priceData.basePrice - discount + shippingCost;
    return price;
}

module.exports = { priceOrder };

// result = priceOrder(product, 100, shippingMethod)
// console.log(result);