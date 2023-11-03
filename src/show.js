/**
 A user can see a show view with all the purchase details.

 */

const { purchases } = require("../data/products");

// const testPurchases = [
//   { id: "LHyZ", name: "coffee", amount: "$250.00", donate: "$13.00" },
//   { id: "dMZB", name: "bandana", amount: "$365.00", donate: "$1.00" },
// ];

function showPurchase(purchases) {
  // return testPurchases[0].name

  return purchases;
}

module.exports = { showPurchase };
