const { listPurchases, calculateTotalDonation } = require("../src/purchases");

describe("listPurchases", () => {
  it("should return an empty array when there are no purchases", () => {
    global.purchases = [];

    const result = listPurchases();

    expect(result).toEqual([]);
  });
});

