//a user can update a purchase

const { purchases } = require("../data/products");

// const testPurchases = [
//   { id: "LHyZ", name: "coffee", amount: "$250.00", donate: "$13.00" },
//   { id: "dMZB", name: "bandana", amount: "$365.00", donate: "$1.00" }, ]



function revisePurchase(purchases, name, newName) {

    const purchase = purchases.find((purch) => purch.name === name);
    if (purchase) {
        purchase.name = newName;
        return purchases;
    } else {
return purchases;
    }
}


module.exports = { revisePurchase }