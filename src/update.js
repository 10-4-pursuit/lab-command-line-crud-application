//a user can update a purchase

const { purchases } = require("../data/products");

// const testPurchases = [
//   { id: "LHyZ", name: "coffee", amount: "$250.00", donate: "$13.00" },
//   { id: "dMZB", name: "bandana", amount: "$365.00", donate: "$1.00" }, ]

// function parseKeyValuePairs(keyValuePairs) {
//     const object = {};
//     keyValuePairs.forEach((pair) => {
//       const [key, value] = pair.split('=');
//       object[key] = value;
//     });
//     return object;
//   }


function revisePurchase(purchases, productID, updatedProduct) {

      // Parse the updated product object into an object.
//   const updatedProductObject = parseKeyValuePairs(updatedProduct);

  const index = purchases.findIndex((product) => product.id === productID);
  if (index > -1) {
    purchases[index].id = productID;
    purchases[index].name = updatedProduct;
    console.log("Product has been successfully updated");
    return purchases;
  } else {
    console.log("Product not found. No action taken");
    return purchases;
  }
}

module.exports = { revisePurchase };
