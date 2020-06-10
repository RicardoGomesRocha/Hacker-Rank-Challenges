const breakingRecords = require('./index');

describe("Apple and Oranges problem test suit", () => {

    it("[10 5 20 20 4 5 2 25 1]", () => {
        const inputData = [
            [10, 5, 20, 20, 4, 5, 2, 25, 1]
        ];
        const outputData = [2, 4];
        expect(breakingRecords(...inputData)).toEqual(outputData);
    });

});