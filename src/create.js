const { nanoid } = require("nanoid")

function createPurchases(purchases, purchaseName, amount, amountDonate ) {
    const purchase = { id: nanoid(4), name: purchaseName, amount: `$${parseFloat(amount).toFixed(2)}`, donate:`$${Math.round(parseFloat(amountDonate * 100) / 100).toFixed(2)}` };
    purchases.push(purchase);
    return purchases;
  }

  module.exports = {createPurchases}