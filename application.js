const purchaseControl = require('./src/purchaseControl');
const renderIndexView = require('./src/views/indexView');
const renderShowView = require('./src/views/showView');

const args = process.argv.slice(2);

if (args[0] === 'create') {
  const name = args[1];
  const amount = parseFloat(args[2]);
  purchaseControl.create(name, amount);
  console.log('Purchase created successfully.');
} else if (args[0] === 'index') {
  const purchases = purchaseControl.getAll();
  renderIndexView(purchases);
} else if (args[0] === 'show') {
  const id = args[1];
  const purchase = purchaseControl.purchaseById(id);
  if (purchase) {
    renderShowView(purchase);
  } else {
    console.log('Purchase not found.');
  }
} else if (args[0] === 'update') {
  const id = args[1];
  const name = args[2];
  const amount = parseFloat(args[3]);
  const updatedPurchase = purchaseControl.update(id, name, amount);
  if (updatedPurchase) {
    console.log('Purchase updated successfully.');
  } else {
    console.log('Purchase not found.');
  }
} else if (args[0] === 'delete') {
  const id = args[1];
  purchaseControl.deletePurchase(id);
  console.log('Purchase deleted successfully.');
} else if (args[0] === 'total-donation') {
  const totalDonation = purchaseControl.getTotalDonation(purchaseControl.purchases);
  console.log(`Total Donation: $${totalDonation}`);
} else {
  console.log('Usage:');
  console.log('node app.js create <name> <amount>');
  console.log('node app.js index');
  console.log('node app.js show <id>');
  console.log('node app.js update <id> <name> <amount>');
  console.log('node app.js delete <id>');
  console.log('node app.js total-donation');
}
