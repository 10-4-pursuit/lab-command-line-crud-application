const { createPurchase, updatePurchase, deleteAllPurchases, displayAllPurchases, totalDonations } = require("./src/controller")
const { nanoid } = require("nanoid")
const donations = [
    {
      id: nanoid(4),
      name: "John",
      amount: 50,
      donation: 20.30,
    },
    {
      id: nanoid(4),
      name: "Alice",
      amount: 30,
      donation: 10.10,
    },
    {
      id: nanoid(4),
      name: "Bob",
      amount: 40,
      donation: 15.20,
    },
    {
      id: nanoid(4),
      name: "Eva",
      amount: 25,
      donation: 5.50,
    },
    {
      id: nanoid(4),
      name: "David",
      amount: 60,
      donation: 25.99,
    },
  ];
  


function run() {
    const action = process.argv[2];
    const name = process.argv[3];
    
    
    
    switch (action) {
      case "createPurchase":
        const num = process.argv[4]
        console.log(createPurchase(donations, name, num ))
        break;
      case "updatePurchase":
        const increaseAmount = process.argv[4] 
        console.log(updatePurchase(donations, name, increaseAmount));
        break;
      case "deleteAllPurchases":
        console.log(deleteAllPurchases(donations))
        break;
      case "displayAllPurchases":
        displayAllPurchases(donations);
        break;
      case "totalDonations":
        console.log(totalDonations(donations));
        break;
        
      default:
        console.log("There was an error.");
    }
  }

  run();