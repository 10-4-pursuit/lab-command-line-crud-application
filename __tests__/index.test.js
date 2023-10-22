const { addSet, getOneSet, generateSet } = require("../src/sets.js");


describe("testing addSet()", () => {
    it("returns the value of an added object", () => {
        const newSet = generateSet();
        expect(addSet(newSet)).toEqual(newSet);
    })
})


describe("testing getOneSet()", () => {
    it("returns object matching the given id", () => {
        expect(getOneSet("rdIV-ZU0tWPXG8LH_cJ8d")).toEqual({
            "name": "Gislason, Hickle and Lubowitz",
            "color": "teal",
            "priceInCents": 277240,
            "inStock": false,
            "uniqueId": "rdIV-ZU0tWPXG8LH_cJ8d",
            "donation": "324.00"
        })
    })
    it("returns null if given invalid id", () => {
        expect(getOneSet("fmfmdkddnjdfk")).toBe(null);
    })
})
