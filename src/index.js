const chalk = require("chalk")
const nanoid = require("nanoid")

const purchases = []
const inform = console.log

function createPurchase(name, amount, donation) {
    const id = nanoid(10)
    const roundedDonation = parseFloat(donation).toFixed(2)
    const purchase = { id, name, amount, donation: roundedDonation}

}

function getAllPurchases() {
    return purchases.map((purchase) => ({ id:
    purchase.id, name: purchase.name }))
}