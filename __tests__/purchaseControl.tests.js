const {
    create,
    getAll,
    purchaseById,
    update,
    deletePurchase,
    getTotalDonation,
} = require('../src/purchaseControl');

const purchases = [
  { id: 'abc123', name: 'Item 1', amount: 10.50, donation: 2.50 },
  { id: 'def456', name: 'Item 2', amount: 5.25, donation: 1.25 },
  { id: 'ghi789', name: 'Item 3', amount: 15.75, donation: 3.75 },
];
  
describe('create()', () => {
it('should create and retrieve a purchase', () => {
    create('Item 1', 5.0);
    create('Item 2', 8.0);
  
    const purchases = getAll();
  
    expect(purchases).toEqual(
      expect.arrayContaining([
        { id: expect.any(String), name: 'Item 1' }, 
        { id: expect.any(String), name: 'Item 2' },
        ])
      )
  
    const purchase = purchaseById(purchases[0].id);
  
    expect(purchase.name).toBe('Item 1');
    expect(purchase.amount).toBe(5.0);
  });
});

describe('update()', () => {
it('should update a purchase', () => {
    const purchase = create('Item 3', 15.0);
    const updatedPurchase = update(purchase.id, 'Updated Item 3', 20.0);
  
    expect(updatedPurchase.name).toBe('Updated Item 3');
    expect(updatedPurchase.amount).toBe(20.0);
  });
});

describe('deletePurchase()', () => {
it('should delete a purchase', () => {
    const purchase = create('Item 4', 30.0);
    deletePurchase(purchase.id);
  
    const purchaseIndex = getAll().findIndex((p) => p.id === purchase.id);
    expect(purchaseIndex).toBe(-1);
  });
});

describe('getTotalDonation()', () => {
  it('should return the total donation amount for all purchases', () => {
    const expectedTotalDonation = 2.50 + 1.25 + 3.75;
    const result = getTotalDonation(purchases);

    expect(result).toEqual(expectedTotalDonation);
  });

  it('should return 0 if there are no purchases', () => {
    const emptyPurchases = [];
    const result = getTotalDonation(emptyPurchases);

    expect(result).toEqual(0);
  });
});