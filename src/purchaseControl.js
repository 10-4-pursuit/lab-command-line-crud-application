const Purchase = require('./purchaseModel.js');

const purchases = [];

function create(name, amount) {
  const purchase = new Purchase(name, amount);
  purchases.push(purchase);
  return purchase;
}

function getAll() {
  return purchases.map((purchase) => ({ id: purchase.id, name: purchase.name }));
}

function purchaseById(id) {
  return purchases.find((purchase) => purchase.id === id);
}

function update(id, name, amount) {
  const purchase = purchaseById(id);
  if (purchase) {
    purchase.name = name;
    purchase.amount = amount;
    purchase.donation = parseFloat((amount * 0.1).toFixed(2));
  }
  return purchase;
}

function deletePurchase(id) {
  const index = purchases.findIndex((purchase) => purchase.id === id);
  if (index !== -1) {
    purchases.splice(index, 1);
  }
}

function getTotalDonation(purchases) {
  const totalDonation = purchases.reduce((total, purchase) => total + purchase.donation, 0);
  return parseFloat(totalDonation.toFixed(2));
}



module.exports = {
  create,
  getAll,
  purchaseById,
  update,
  deletePurchase,
  getTotalDonation,
  purchases,
};
