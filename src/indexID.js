//A user can see an index of all their purchases, showing the `id` and the `name`.

const { purchases } = require("../data/products");

// const testPurchases = [
//   { id: "LHyZ", name: "coffee", amount: "$250.00", donate: "$13.00" },
//   { id: "dMZB", name: "bandana", amount: "$365.00", donate: "$1.00" },
// ];

function showPurchasesIDName(items) {
  //only show id & name
  for (let x of items) {
    itemId = x.id;
    itemName = x.name;
  }
  return {
    id: itemId,
    name: itemName,
  };
}

module.exports = { showPurchasesIDName };
