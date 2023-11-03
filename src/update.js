//a user can update a purchase

const { purchases } = require("../data/products");

// const testPurchases = [
//   { id: "LHyZ", name: "coffee", amount: "$250.00", donate: "$13.00" },
//   { id: "dMZB", name: "bandana", amount: "$365.00", donate: "$1.00" }, ]



function revisePurchase(purchases, productID, updatedProduct) {

    const index = purchases.findIndex((product) => product.id === productID);
    if (index > -1) {
        purchases[index].id = productID;
        purchases[index].name = updatedProduct;
        console.log("Product has been successfully updated");
        return purchases;
    } else {
        console.log("Product not found. No action taken")
return purchases;
    }
}


module.exports = { revisePurchase }