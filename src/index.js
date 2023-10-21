const chalk = require("chalk")
const nanoid = require("nanoid")

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
    const totalDonation = purchases.reduce(( total, purchase) => total + parseFloat(purchase.donation), 0)
    return totalDonation.toFixed(2)
}

function displayPurchase(purchase) {
    inform(chalk.bold("Purchase Details:"))
    inform(`ID: ${purchase.id}`);
    inform(`Name: ${purchase.name}`);
    inform(`Amount: $${purchase.amount}`);
    inform(`Donation: $${purchase.donation}`);
}