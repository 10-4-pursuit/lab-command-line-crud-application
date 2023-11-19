const nanoid = require('nanoid');
const chalk = require('chalk');

// Function to round up the change and set it as a donation
function roundUpAndDonate(amount) {
    const roundedAmount = Math.ceil(amount);
    const change = roundedAmount - amount;

    console.log(chalk.green(`Rounding up $${amount} to $${roundedAmount}.`));
    console.log(chalk.blue(`Setting the change $${change} as a donation.`));

    // You can implement donation logic here (e.g., sending to a donation service)
}

// Example usage
const purchaseAmount = 15.75;
roundUpAndDonate(purchaseAmount);
