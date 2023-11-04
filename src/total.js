const { purchases } = require("../data/products");


function totalDonations(purchases) {
  //calculate the total donations
  const totalDonations = purchases.reduce(
    (total, product) => total + Number(product.amountDonate),
    0
  );

  //formats the total donations to two decimal places
  const formattedTotalDonations = totalDonations.toFixed(2);

  // Returns the total donations.
  return `$${formattedTotalDonations}`;
}


module.exports = { totalDonations };
