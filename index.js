const fs = require("fs");

// logs a message to the console
const inform = console.log;

//imported functions used to read and write JSON files
const { readJSONFile, writeJSONFile } = require("./helpers");

//imported function to create new purchases
const { createPurchases } = require("./src/create");

//imported function to show view with all the purchase details
const { showPurchase } = require("./src/show");

//imported function to index of all their purchases, showing the `id` and the `name`
const { showPurchasesIDName } = require("./src/indexID");

//imported function to update a purchase
const { revisePurchase } = require("./src/update");

//this function is responsible or reading the purchases from the JSON file, performing the requested action on the purchases, and then writing the updated purchases back to the JSON file
function run() {
  let writeToFile = false;
  let updatedPurchases = [];
  let products = readJSONFile("./data", "products.json");

  const action = process.argv[2]; //prompts the action to perfom in the command line
  const product = process.argv[3]; //prompts the user what they want to do the product based on the action above
  const purchaseAmount = process.argv[4];
  const donateAmount = process.argv[5];
  // const name = process.argv[4];
  const newName = process.argv[5];

  //This switch statement takes the action passed to the run() function as its input and performs the requested action on the purchases
  switch (action) {
    case "index":
      const purchasesWithIDAndName = showPurchasesIDName(products);
      inform(action, purchasesWithIDAndName);
      break;
    case "create":
      updatedPurchases = createPurchases(
        products,
        product,
        purchaseAmount,
        donateAmount
      );
      writeToFile = true;
      inform(action, updatedPurchases);
      break;
    case "show":
      const purchasesWithFullDetails = showPurchase(products);
      inform(action, purchasesWithFullDetails);
      break;
    case "update":
      purchaseUp = revisePurchase(products, name, process.argv[4]);
      writeToFile = true;
      inform(action, purchaseUp);
      break;
    case "delete":
      inform(action, products);
      break;
    case "total":
      inform(action, products);
      break;
    default:
      inform("There was an error.");
  }
  //This conditional statement checks if the writeToFile flag is set to true. If it is, then the updated purchases are written back to the JSON file.
  if (writeToFile) {
    writeJSONFile("./data", "products.json", updatedPurchases);
  }
}
run();
