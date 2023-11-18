// const { green, red, blue } = require('chalk');
const { nanoid } = require('nanoid');
const fs = require('fs');
const filePath = './data/purchases.json';

let Purchases = require(filePath);

let PurchasesList = [...Purchases]

//Create a new purchase
function createPurchase(id, name, amount) {
   console.log(PurchasesList)
   let newId = id;
   if(!!newId){
      newId = nanoid();
   }
   console.log("Create Id", newId)
   const donation = Math.round((amount / 100) * 20) / 100;
   const newPurchase = { id, name, amount, donation };
   PurchasesList.push(newPurchase);
   saveData(filePath, PurchasesList);
   console.log(`New purchase created: ${name}`);
   
}

//Get an index of all purchases
function indexOfPurchases() {
   console.log('Index of all purchases:');
   const purchasesIndexes = []
   PurchasesList.forEach((purchase) => {
      console.log(`${purchase.id} - ${purchase.name}`);
       purchasesIndexes.push(`${purchase.id} - ${purchase.name}`)
   });
   return purchasesIndexes;
}

//Get a show view of a specific purchase
function showPurchase(id) {
   console.log("showPurchase", id)
 const purchase = PurchasesList.find((purchase) => purchase.id === id);
 if (purchase) {
    console.log(`Purchase details for ID: ${id}`);
    console.log(`Name: ${purchase.name}`);
    console.log(`Amount: ${purchase.amount}`);
    console.log(`Donation: ${purchase.donation}`);
 } else {
    console.log('No purchase found with that ID.');
 }
}

//Update a purchase
function updatePurchase(id, name, amount) {
   const purchase = PurchasesList.find((purchase) => purchase.id === id);
   const index = PurchasesList.indexOf(purchase);
   console.log('afdsafds',index)
   if (purchase) {
      const originalAmount = purchase.amount; // Store the original amount
      const donation = Math.round((originalAmount / 100) * 20) / 100; // Use the original amount for donation calculation
      purchase.name = name;
      purchase.amount = amount;
      purchase.donation = donation;
      PurchasesList[index] = purchase;
      console.log(PurchasesList);
      saveData(filePath, PurchasesList);
      console.log(`Purchase details updated for ID: ${purchase.id}`);

   } else {
      console.log('No purchase found with that ID.');
   }
  }


// Delete a purchase
function deletePurchase(id) {
 const index = PurchasesList.findIndex((purchase) => purchase.id === id);
 if (index !== -1) {
   PurchasesList.splice(index, 1);
    console.log(`Purchase deleted for ID: ${id}`);
    saveData(filePath, PurchasesList);
 } else {
    console.log('No purchase found with that ID.');
 }
}

// Calculate the total amount of money for donation
function totalDonation() {
 let total = 0;
 PurchasesList.forEach((purchase) => {
    total += purchase.donation;
 });
 console.log(`Total amount of money for donation: $${total.toFixed(2)}`);
 return total;
}

function saveData(path, purchases) {
   var json = JSON.stringify(purchases, null, 2);
   fs.writeFileSync(path, json);
}

module.exports = {
    createPurchase,
   indexOfPurchases,
    showPurchase,
    updatePurchase,
    deletePurchase,
    totalDonation
};