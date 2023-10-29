

const {
    createPurchase,
    getAllPurchases,
    getPurchaseById,
    updatePurchase,
    deletePurchase,
    calculateTotalDonation,
  } = require("../src/index")
  
  describe("createPurchase", () => {
    it("should create a purchase and return it", () => {
      const purchase = createPurchase("Test Item", 10.0, 1.5)
      expect(purchase).toEqual([
        { id: expect.any(String), name: "Test Item", amount: 10.0, donation: "1.50" },
      ])
    })
  })


  describe('getAllPurchases', () => {
    it("should return an array of all purchases with id and name", () => {
        const purchases = getAllPurchases()
        expect(purchases).toEqual(expect.arrayContaining([expect.objectContaining({ id: expect.any(String), name: expect.any(String)})]))

    })
  })

  describe("getPurchaseById", () => {
    it("should return the purchase with the given ID", () => {
      const purchase = createPurchase("Test Item", 10.0, 1.5)
      const foundPurchase = getPurchaseById(purchase[0].id)
      expect(foundPurchase).toEqual(purchase[0])
    })
  
    it("should return null if the purchase with the given ID does not exist", () => {
      const foundPurchase = getPurchaseById("nonexistent-id");
      expect(foundPurchase).toBeNull()
    })
  })

  describe("updatePurchase", () => {
    it("should update and return the purchase with the given ID", () => {
      const purchase = createPurchase("Test Item", 10.0, 1.5);
      const updatedPurchase = updatePurchase(purchase[0].id, "Updated Item", 20.0, 2.0)
      expect(updatedPurchase).toEqual({ id: purchase[0].id, name: "Updated Item", amount: 20.0, donation: "2.00" })
    })
  
    it("should return null if the purchase with the given ID does not exist", () => {
      const updatedPurchase = updatePurchase("nonexistent-id", "Updated Item", 20.0, 2.0);
      expect(updatedPurchase).toBeNull();
    });
  });
  
  
  describe("deletePurchase", () => {
    it("should delete the purchase with the given ID and return true", () => {
      const purchase = createPurchase("Test Item", 10.0, 1.5);
      const result = deletePurchase(purchase[0].id);
      expect(result).toBe(true);
    });
  
    it("should return false if the purchase with the given ID does not exist", () => {
      const result = deletePurchase("nonexistent-id");
      expect(result).toBe(false);
    });
  })

  
  describe("calculateTotalDonation", () => {
    it("should calculate the total donation amount correctly", () => {
      createPurchase("Item 1", 10.5, 1.25);
      createPurchase("Item 2", 15.75, 2.5);
      const totalDonation = calculateTotalDonation();
      expect(totalDonation).toBe("3.75");
    });
  
    it("should return '0.00' if there are no purchases", () => {
      const totalDonation = calculateTotalDonation();
      expect(totalDonation).toBe("0.00");
    });
  });
