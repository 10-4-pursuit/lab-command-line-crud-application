const { deleteSet, updateSet, viewDonation, getOneSet, getAllSetInfo, getAllSetsByIdAndName, addSet } = require("./src/sets");

const chalk = require("chalk");
const red = chalk.red.bold;
const green = chalk.green;

function run() {
    const command = process.argv[2];
    if (command === "add"){
        console.log(green("getting ready to add purchase"));
        const [name, color, priceInCents, inStock, donation] = process.argv.slice(3);
        const newSet = {name, color, priceInCents, inStock, donation};
        console.log(addSet(newSet));
    } else if(command === "update"){
        console.log(green("getting ready to update purchase"));
        const [uniqueId, name, color, priceInCents, inStock] = process.argv.slice(3);
        const newSetData = {name, color, priceInCents, inStock};
        console.log(updateSet(uniqueId, newSetData));
    } else if(command === "read"){
        console.log(green("getting ready to read purchase"));
        const [uniqueId] = process.argv.slice(3);
        console.log(getOneSet(uniqueId));
    } else if (command === "delete"){
        console.log(green("getting ready to delete purchase"));
        const [index] = process.argv[3];
        console.log(deleteSet(index));
        console.log(green("Purchase deleted"));
    } else if (command === "view"){
        console.log(green("getting ready to view donation total"));
        console.log(viewDonation());
    } else {
        console.log(red("Error: Command not found"));
    }
}
run();