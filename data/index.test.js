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

  decribe('getPurchaseById', () => {
    it("should return an array of all purchases with id and name", () => {
        const purchases = getAllPurchases()
        expect(purchases).toEqual(expect.arrayContaining([expect.objectContaining({ id: expect.any(String), name: expect.any(String)})]))

    })
  })

  