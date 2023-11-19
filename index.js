const fs = require("fs");
const { nanoid } = require("nanoid");
const {
    createPurchase,
    listPurchases,
    viewPurchase,
    updatePurchase,
    deletePurchase,
    calculateTotalDonation,
    loadPurchases,
    getPurchases
} = require("./src/purchases_controller.js");

function processInput() {
  const expectedCommand = process.argv[2];

  if (expectedCommand === "create") {
    const [name, amount, donation] = process.argv.slice(3);
    const result = createPurchase(name, amount, donation);
    console.log(result);
  } else if (expectedCommand === "list") {
    const result = listPurchases();
    console.log(result);
  } else if (expectedCommand === "view") {
    const result = viewPurchase(process.argv[3]);
    console.log(result);
  } else if (expectedCommand === "delete") {
    const result = deletePurchase(process.argv[3]);
    console.log(result);
  } else if (expectedCommand === "update") {
    const [name, amount, donation] = process.argv(4);
    const result = updatePurchase(process.argv[3], {name, amount, donation} );
    console.log(result);
  } else {
    console.log(`error`);
  }

}

processInput();