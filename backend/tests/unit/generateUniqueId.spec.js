const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('Should be able to create a new ONG', () => {
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    });
});

