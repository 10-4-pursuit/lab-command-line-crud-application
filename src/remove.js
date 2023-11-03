//user can remove a product

const { purchases } = require("../data/products");


function remove (products, productID){
    const index = products.findIndex((product) => product.id === productID);
    if (index > -1) {
        products.splice(index, 1);
        return products;   
    }else {
        console.log("Product not found. No action taken");
        return products
    }
}

module.exports = { remove }