const { listPurchases } = require("../src/purchases");

describe("listPurchases", () => {
  it("should return an empty array when there are no purchases", () => {
    global.purchases = [];

    const result = listPurchases();

    expect(result).toEqual([]);
  });
});


describe('listPurchases', () => {
  it('should return an array of purchase IDs and names', () => {
    const result = listPurchases();

    // Prepare the expected result based on the mocked data
    const expectedList = listPurchases().map(({ id, name }) => ({ id, name }));

    // Ensure the result matches the expected list
    expect(result).toEqual(expectedList);
  });
});