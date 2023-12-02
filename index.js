const purchasesAPI = require('./src/purchases');

function processInput() {
    const command = process.argv[2];
    let result;

    if (command === 'create') {
        const name = process.argv[3];
        const amount = parseFloat(process.argv[4]);
        const donation = parseFloat(process.argv[5]);
        result = purchasesAPI.createPurchases(name, amount, donation);
    }

    if (command === 'read') {
        result = purchasesAPI.getPurchases();
    }

    if (command === 'update') {
        const id = process.argv[3];
        const name = process.argv[4];
        const amount = parseFloat(process.argv[5]);
        const donation = parseFloat(process.argv[6]);
        result = purchasesAPI.updatePurchases(id, name, amount, donation);
    }

    if (command === 'delete') {
        const id = process.argv[3];
        result = purchasesAPI.deletePurchases(id);
    }

    if (command === 'total') {
        result = purchasesAPI.totalPurchases();
    }

    console.log(result);
}

processInput();
