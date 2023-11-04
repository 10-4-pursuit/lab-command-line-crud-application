/**
 A user can see a show view with all the purchase details.

 */

const { purchases } = require("../data/products");

// const testPurchases = [
//   { id: "LHyZ", name: "coffee", amount: "$250.00", donate: "$13.00" },
//   { id: "dMZB", name: "bandana", amount: "$365.00", donate: "$1.00" },
// ];

function showPurchase(purchases, productID ) {
  // return testPurchases[0].name
    const product = purchases.find((product) => product.id === productID);
    return product.id + " " + product.name + " " + product.amount + " " + product.amountDonate;

 
}

module.exports = { showPurchase };
