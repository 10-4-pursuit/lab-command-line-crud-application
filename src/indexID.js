//A user can see an index of all their purchases, showing the `id` and the `name`.

const {purchases} = require ("../data/purchases")

const testPurchases = [
  { id: "LHyZ", name: "coffee", amount: "$250.00", donate: "$13.00" },
  { id: "dMZB", name: "bandana", amount: "$365.00", donate: "$1.00" },
];

function showPurchasesID () {
    //only show id & name
    return purchases
}
console.log(testPurchases)


module.export = {showPurchasesID}