const { 
    createPurchase,
    indexOfPurchases,
    showPurchase,
    updatePurchase,
    deletePurchase,
    totalDonation
     } = require('../index');

     const { nanoid } = require('nanoid');

 const uuid =  nanoid();

describe('createPurchase', () => {
    it('should create a new purchase', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        createPurchase(uuid, 'test purchase', 100);
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('New purchase created: test purchase'));
    });
});

describe('indexOfPurchases', () => {
    it('should return an index of all purchases', () => {
        const consoleSpy = jest.spyOn(console, 'log');
       indexOfPurchases();
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Index of all purchases:'));
    });
});

describe('showPurchase', () => {
    it('should show the details of a specific purchase', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        showPurchase(uuid);
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(`Purchase details for ID: ${uuid}`));
    });
});

describe('showPurchase', () => {
    it('should fail to show the details of a specific purchase', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        showPurchase("1234344343fsdaf");
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('No purchase found with that ID.'));
    });
});

describe('updatePurchase', () => {
    it('should update the details of a specific purchase', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        updatePurchase(uuid, 'updated purchase', 200);
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(`Purchase details updated for ID: ${uuid}`));
    });
});

describe('updatePurchase', () => {
    it('should fail update the details of a specific purchase', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        updatePurchase('Not a vallid Id', 'updated purchase', 200);
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('No purchase found with that ID.'));
    });
});

describe('deletePurchase', () => {
    it('should delete a specific purchase', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const data = [
            {
                "id": uuid,
                "name": "Item 2",
                "amount": 200,
                "donation": 24
              },
              {
                "id": "QX0lcuOCr5ahlqT2KWJf8",
                "name": "test purchase",
                "amount": 100,
                "donation": 0.2
              },
        ];
        deletePurchase(uuid, []);
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(`Purchase deleted for ID: ${uuid}`));
    });
});

describe('totalDonation', () => {
    it('should calculate the total donation', () => {
        const consoleSpy = jest.spyOn(console, 'log');
       const total = totalDonation();
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(`Total amount of money for donation: $${total.toFixed(2)}`));
    });
});
