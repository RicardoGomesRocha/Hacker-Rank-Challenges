const getTotalX = require('./index');

describe("Between two problem test suit", () => {
    it("[2, 6] [24, 36]", () => {
        const inputData = [
            [2, 6],
            [24, 36]
        ];
        const outputData = 2;
        expect(getTotalX(...inputData)).toEqual(outputData);
    });
    it("[2, 4] [16, 32, 96]", () => {
        const inputData = [
            [2, 4],
            [16, 32, 96]
        ];
        const outputData = 3;
        expect(getTotalX(...inputData)).toEqual(outputData);
    });

});