const { nanoid } = require("nanoid");
const FileSystem = require("fs");
const path = require("path");
const dataFilePath = path.join(__dirname, "..", "data", "purchases.json");

let purchases = [];

function loadPurchases() {
    try {
        const dataBuffer = FileSystem.readFileSync(dataFilePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
       purchases = [];
       return purchases;
    }

}

loadPurchases();

function savePurchases(purchasesToSave = purchases) {
    const dataToWrite = JSON.stringify(purchasesToSave, null, 2);
    FileSystem.writeFileSync(dataFilePath, dataToWrite);
}



const createPurchases = (name, amount, donation) => {
    const id = nanoid(4);
    const roundDonation = Math.round(donation * 100) / 100;
    const newPurchase = { id, name, amount, donation: roundDonation };

    // Load existing purchases
    const purchases = loadPurchases();

    // Add the new purchase
    purchases.push(newPurchase);

    // Save the updated purchases
    savePurchases();

    // Return the new purchase
    return newPurchase;
};

    
function getPurchases() {
    const purchases = loadPurchases();
    return purchases;
}

function deletePurchases(id) {
    const purchases = loadPurchases();
    const newPurchases = purchases.filter(purchase => purchase.id !== id);
    savePurchases(newPurchases);
}

function updatePurchases(id, name, amount, donation) {
    const purchases = loadPurchases();
    const newPurchases = purchases.map(purchase => {
        if (purchase.id === id) {
            purchase.name = name;
            purchase.amount = amount;
            purchase.donation = donation;
        }
        return purchase;
    });
    savePurchases(newPurchases);
}


function totalPurchases() {
    const purchases = loadPurchases();
    let total = 0;
    purchases.forEach(purchase => {
        total += purchase.donation;
    });
    return total;
}


module.exports = {
    createPurchases,
    getPurchases,
    deletePurchases,
    updatePurchases,
    totalPurchases
}