const { nanoid } = require('nanoid');

class Purchase {
  constructor(name, amount) {
    this.id = nanoid();
    this.name = name;
    this.amount = amount;
    this.donation = this.roundToTwoDecimalPlaces(amount);
  }

  roundToTwoDecimalPlaces(value) {
    return parseFloat(value.toFixed(2));
  }
}

module.exports = Purchase;
