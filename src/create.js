const { nanoid } = require("nanoid"); // generates an alphanumeric ID
const chalk = require("chalk"); //package colors printed outputs
const dataTest= require("../data/dataTest"); //test data to test out functionality


function createPurchases(purchases, productName, amount, amountDonate) {

  //stores four properties in an object called product based on the argument passed
  const product = {
    id: nanoid(4),
    name: productName,
    amount: parseFloat(amount).toFixed(2),
    amountDonate: Math.round(parseFloat(amountDonate * 100) / 100).toFixed(
      2
    ), 
  };
  purchases.push(product);

  return purchases;
}



module.exports = { createPurchases };
