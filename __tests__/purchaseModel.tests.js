const Purchase = require('../src/purchaseModel');

describe('Purchase {}', () => {
it('should create a purchase', () => {
    const purchase = new Purchase('Test Item', 10.5);

    expect(purchase).toHaveProperty('id');
    expect(purchase).toHaveProperty('name', 'Test Item');
    expect(purchase).toHaveProperty('amount', 10.5);
  }),

it('should round to two decimal places', () => {
    const purchase = new Purchase('Test Item', 10.555);

    expect(purchase.donation).toBeCloseTo(10.56, 0.01);
  });
});





