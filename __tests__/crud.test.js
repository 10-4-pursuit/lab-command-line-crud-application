const { createPurchase } = require("./src/controller")
const donations = require(".data/sample")

    test("add a new purchase to the array of objects", () => {
        const purchase = createPurchase(donations, "Luna", 10)
        expect(purchase.name).toBe("Luna")
        expect(purchase.donation).toBe(parseFloat(10).toFixed(2))
    })
    test("deleting all purchases", () => {
        const purchase = deleteAllPurchases(donations)
        expect(purchase.length.toBe(0))
    })
