const chalk = require("chalk");
const { nanoid } = require("nanoid");

const purchases = []
const inform = console.log

function createPurchase(name, amount, donation) {
    const id = nanoid(10)
    const roundedDonation = parseFloat(donation).toFixed(2)
    const purchase = { id, name, amount, donation: roundedDonation } 
    purchases.push(purchase)
    return purchases

}

function getAllPurchases() {
    return purchases.map((purchase) => ({ id:
    purchase.id, name: purchase.name }))
}

function getPurchaseById(id) {
    return purchases.find((purchase) => purchase.id === id)
}

function updatePurchase(id, name, amount, donation) {
    const purchase = purchases.find((purch) => purch.id === id)
    if (purchase) {
        purchase.name = name || purchase.name
        purchase.amount = amount || purchase.amount
        purchase.donation = parseFloat(donation).toFixed(2) || purchase.donation
        return purchase
    }
    return null
}


function deletePurchase(id) {
    const index = purchases.findIndex((purch) => purch.id === id)
    if(index !== -1) {
        purchases.splice(index, 1)
        return true
    }
    return false
}

function calculateTotalDonation() {
    if (purchases.length === 0) {
        return "0.00"; // Return 0 if there are no purchases
    }

    const totalDonation = purchases.reduce((total, purchase) => {
        const donation = parseFloat(purchase.donation);
        return isNaN(donation) ? total : total + donation;
    }, 0);

    return totalDonation.toFixed(2);
}


function displayPurchase(purchase) {
    if (purchase) {
        inform(chalk.bold("Purchase Details:"))
        inform(`ID: ${purchase.id}`);
        inform(`Name: ${purchase.name}`);
        inform(`Amount: $${purchase.amount}`);
        inform(`Donation: $${purchase.donation}`);
    } else {
        inform("No purchase found.");
    }
}

function displayAllPurchases() {
    inform(chalk.bold("All Purchases:"))
    purchases.forEach((purchase) => displayPurchase(purchase));
}



displayAllPurchases()
inform("\nTotal Donation Amount: $" + calculateTotalDonation())
displayPurchase()


module.exports = { createPurchase,
    getAllPurchases,
    getPurchaseById,
    updatePurchase,
    deletePurchase,
    calculateTotalDonation,
}