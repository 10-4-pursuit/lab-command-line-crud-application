const fs = require("fs");

const { nanoid } = require("nanoid");

const path = require("path");
const dataFilePath = path.join(__dirname, "../data/purchases.json");


let purchases = [];

function loadPurchases() {
  try {
    const data = fs.readFileSync(dataFilePath);
    purchases = JSON.parse(data);
  } catch (err) {
    purchases = [];
  }
}
loadPurchases()

function savePurchasesToFile() {
  const dataToWrite = JSON.stringify(purchases, null, 2);
  fs.writeFileSync(dataFilePath, dataToWrite);
}


function createPurchase(name, amount, donation) {
  const id = nanoid(4);
  const roundDonation = Math.round(donation * 100) / 100;
  const purchase = { id, name, amount, donation: roundDonation };
  purchases.push(purchase);
  savePurchasesToFile();
  return purchase;
}

function getPurchases() {
    return purchases;
  }
  
function listPurchases() {
    return purchases.map(({ id, name }) => ({ id, name }));
  }


  
function viewPurchase(id) {
    const purchase = purchases.find((p) => p.id === id);
    return purchase
      ? `Id: ${purchase.id}\nName: ${purchase.name}\nAmount: ${purchase.amount}\nDonation: ${purchase.donation}`
      : null;
  }
  
function updatePurchase(id, updatedPurchase) {
    const purchaseList = purchases.findIndex((p) => p.id === id);
    if (purchaseList === -1) {
      return false;
    }
    purchases[purchaseList] = {
      ...purchases[purchaseList],
      ...updatedPurchase,
      donation: parseFloat(updatedPurchase.donation.toFixed(2)),
    };
    savePurchasesToFile();
    return true;
  }

function updatePurchase(id, updatedPurchase) {
    const purchaseList = purchases.findIndex((p) => p.id === id);
    if (purchaseList === -1) {
      return false;
    }
    purchases[purchaseList] = {
      ...purchases[purchaseList],
      ...updatedPurchase,
      donation: parseFloat(updatedPurchase.donation.toFixed(2)),
    };
    savePurchasesToFile();
    return true;
  }
  
  function deletePurchase(id) {
    const purchaseList = purchases.findIndex((p) => p.id === id);
    if (purchaseList === -1) {
      return false;
    } else {
      purchases.splice(purchaseList, 1);
      savePurchasesToFile();
      return true;
    }
  }
  
  function calculateTotalDonation() {
    return purchases.reduce((total, { donation }) => total + donation, 0);
  }
  sum =0 
  sum += arr[i]
  module.exports = {
    createPurchase,
    listPurchases,
    viewPurchase,
    updatePurchase,
    deletePurchase,
    calculateTotalDonation,
    loadPurchases,
    getPurchases
  };