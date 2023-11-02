const inform = console.log; // whenever you call this function, it will log a message to the console
const { readJSONFile, writeJSONFile } = require("./helpers"); //this function can be used to read and write JSON files
const { createPurchases } = require("./src/create"); //this function can be used to create a new purchase
// const { showPurchasesID } = require("./src/indexID")
const {showPurchase } = require("./src/show")
const { showPurchasesID} = require ("./src/indexID")

//this function is responsible or reading the purchases from the JSON file, performing the requested action on the purchases, and then writing the updated purchases back to the JSON file
function run() {
  let writeToFile = false;
  let updatedPurchases = [];
  let purchases = readJSONFile("./data", "purchases.json");
  const action = process.argv[2];
  const purchase = process.argv[3];
  const purchaseAmount = process.argv[4];
  const donateAmount = process.argv[5];


  //This switch statement takes the action passed to the run() function as its input and performs the requested action on the purchases.
  switch (action) {
    case "index":
      const purchasesWithIDAndName = showPurchasesID(purchases);
      inform(action, purchasesWithIDAndName);
      break;
    case "create":
      // inform(action, purchases);
      updatedPurchases = createPurchases(purchases, purchase, purchaseAmount, donateAmount);
      writeToFile = true;
      inform(action, purchases);
      break;
    case "show":
      inform(action, purchases);
      break;
    case "update":
      inform(action, purchases);
      break;
    case "delete":
      inform(action, purchases);
      break;
    default:
      inform("There was an error.");
  }
  //This conditional statement checks if the writeToFile flag is set to true. If it is, then the updated purchases are written back to the JSON file.
  if (writeToFile) {
    writeJSONFile("./data", "purchases.json", updatedPurchases);
  }
}
run();
