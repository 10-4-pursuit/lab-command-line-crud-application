const { faker } = require("@faker-js/faker");
const { nanoid } = require("nanoid");
const set = require("../set.json");

//creates object to add to json
function generateSet() {
    return {
        name: faker.company.name(),
        color: faker.color.human(),
        priceInCents: Math.floor(Math.random() * (500000 - 200000 + 1) + 200000),
        inStock: Math.random() > 0.5,
        uniqueId: nanoid(),
        donation: faker.commerce.price()
    }
}

//create purchase
function addSet(newSet){
    newSet.uniqueId = nanoid();
    set.push(newSet);
    return set[set.length - 1];
}
// addSet();

//read entire purchase by id and name 
function getAllSetsByIdAndName(){
    return set.map((sets) => {
        return {uniqueId: sets.uniqueId, name: sets.name}
    })
}
// console.log(getAllSetsByIdAndName());

//read entire purchase with all info
function getAllSetInfo(){
    return set;
}
// console.log(getAllSetInfo())

//read single purchase
function getOneSet(uniqueId){
    return set.find(sets => sets.uniqueId === uniqueId) || null;
}
// console.log(getOneSet('J4LIGpj2yYjlB-eEI64OZ'));

//read one purchase by donation
function viewDonation(){
    let total = 0;
    set.forEach(sets => {
        total += Number(sets.donation);
    });
    return total;
}
// console.log(viewDonation());

//update method
function updateSet(uniqueId, newSetData){
    const index = set.findIndex(sets => sets.uniqueId === uniqueId);
    set[index] = {
        ...set[index], 
        ...newSetData
    }
    return set[index];
}
// updateSet('J4LIGpj2yYjlB-eEI64OZ', { color: "blue" });

//remove purchase at index
function deleteSet(index){
    const deletedSet = set.splice(index, 1);
    return deletedSet;
}
// deleteSet(0);

module.exports = {
    deleteSet,
    updateSet,
    getAllSetInfo,
    getOneSet,
    getAllSetsByIdAndName,
    addSet,
    generateSet,
    viewDonation
}