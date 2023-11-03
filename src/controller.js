const { nanoid } = require("nanoid")
const chalk = require("chalk")


function createPurchase(donations, name, num ) {

    const purchase = {
        id: nanoid(4),
        name: name,
        amount: Math.floor(Math.random() * 100),
        donation:parseFloat(num).toFixed(2)
    }
    donations.push(purchase)
    return donations
    
}

function updatePurchase(donations, name, increaseAmount) {

    const index = donations.findIndex((product) => product.name === name)

    if (index >= 0) {
        let product = donations[index]
        let newAmount = product.amount + parseFloat(increaseAmount)
        product.amount = newAmount
        console.log(chalk.magenta('Success.'))
    } else {
        console.log(chalk.white('Failure.'))
    }
    return donations
}

function deleteAllPurchases(donations) {

    donations.length = 0
    console.log(chalk.bold('Success to delete.'))
    return donations
}

function displayAllPurchases(donations) {

    donations.forEach((donation) => {
        console.log(chalk.italic(`Name: ${donation.name}`));
        console.log(`ID: ${donation.id}`);
        console.log(chalk.dim('-------------------------'));
    });
}

function totalDonations(donations) {

    let totalPrice = 0
    donations.forEach((purchase) =>{
        totalPrice += purchase.donation
    })
    return totalPrice.toFixed(2)
}

module.exports = { createPurchase, updatePurchase, deleteAllPurchases, displayAllPurchases, totalDonations }