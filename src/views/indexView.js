function renderIndexView(purchases) {
    console.log('ID\tName');
    purchases.forEach((purchase) => {
      console.log(`${purchase.id}\t${purchase.name}`);
    });
  }
  
  module.exports = renderIndexView;
  