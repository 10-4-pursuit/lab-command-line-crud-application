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
  } = require("./src/purchases.js");

  
  function processInput() {
    expectedCommand = process.argv[2]

    if(expectedCommand === "createPurchase") {

      const [name, amount, donation]   = process.argv.slice(3)
      const result = createPurchase(name, amount, donation)
      console.log(result)
    }
    
    else if(expectedCommand === "listPurchases") {
      const result = listPurchases()
      console.log(result)
    }

    else if(expectedCommand === "viewPurchase") {
      const result = viewPurchase(process.argv[3])
      console.log(result)
    }

    else if(expectedCommand === "updatePurchase") {
      const [name, amount, donation]   = process.argv.slice(4)
      const result = updatePurchase(process.argv[3], {name, amount, donation} )
      console.log(result)
    }

    else if(expectedCommand === "deletePurchase") {
      const result = deletePurchase(process.argv[3] )
      console.log(result)
    }
    
    

    else {
      console.log(`error`)
    }

 }

 processInput()