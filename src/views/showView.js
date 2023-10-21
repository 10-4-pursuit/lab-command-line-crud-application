function renderShowView(purchase) {
    console.log(`Purchase ID: ${purchase.id}`);
    console.log(`Name: ${purchase.name}`);
    console.log(`Amount: $${purchase.amount}`);
    console.log(`Donation: $${purchase.donation}`);
  }
  
  module.exports = renderShowView;
  