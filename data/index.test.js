const {
    createPurchase,
    getAllPurchases,
    getPurchaseById,
    updatePurchase,
    deletePurchase,
    calculateTotalDonation,
  } = require("./your-module-name");
  
  describe("createPurchase", () => {
    it("should create a purchase and return it", () => {
      const purchase = createPurchase("Test Item", 10.0, 1.5);
      expect(purchase).toEqual([
        { id: expect.any(String), name: "Test Item", amount: 10.0, donation: "1.50" },
      ]);
    });
  });

  describe("getAllPurchases", () => {
    it("should return an array of all purchases with id and name", () => {
      const purchases = getAllPurchases();
      expect(purchases).toEqual(expect.arrayContaining([expect.objectContaining({ id: expect.any(String), name: expect.any(String) })]));
    });
  });

  describe('getPurchaseById', () => {
    it("should return an array of all purchases with id and name", () => {
        const purchases = getAllPurchases()
        expect(purchases).toEqual(expect.arrayContaining([expect.objectContaining({ id: expect.any(String), name: expect.any(String)})]))

    })
  })

  describe("getPurchaseById", () => {
    it("should return the purchase with the given ID", () => {
      const purchase = createPurchase("Test Item", 10.0, 1.5);
      const foundPurchase = getPurchaseById(purchase[0].id);
      expect(foundPurchase).toEqual(purchase[0]);
    });
  
    it("should return null if the purchase with the given ID does not exist", () => {
      const foundPurchase = getPurchaseById("nonexistent-id");
      expect(foundPurchase).toBeNull();
    });
  });
  

