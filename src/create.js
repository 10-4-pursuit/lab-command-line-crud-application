const { nanoid } = require("nanoid");
const chalk = require("chalk");

//

function createPurchases(purchases, productName, amount, amountDonate) {
  const product = {
    id: nanoid(4),
    name: productName,
    amount: `$${parseFloat(amount).toFixed(2)}`,
    amountDonate: `$${Math.round(parseFloat(amountDonate * 100) / 100).toFixed(
      2
    )}`, //NOTE: have to figure out how to round .23 to 1.00 if entered for amountDonate
  };


  purchases.push(product);
  return purchases;
}

module.exports = { createPurchases };
