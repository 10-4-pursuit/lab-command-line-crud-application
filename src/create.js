const { nanoid } = require("nanoid")

function createPurchases(purchases, purchaseName, amount, amountDonate ) {
    const purchase = { id: nanoid(4), name: purchaseName, amount: `$${parseFloat(amount).toFixed(2)}`, donate:`$${Math.round(amountDonate * 100) / 100}` };
    purchases.push(purchase);
    return purchases;
  }

  module.exports = {createPurchases}