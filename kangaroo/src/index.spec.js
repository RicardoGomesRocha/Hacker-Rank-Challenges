const kangaroo = require('./index');

describe("Kangaroo problem test suit", () => {

    it("[0 3 4 2]", () => {
        const inputData = [0, 3, 4, 2];
        const outputData = "YES";
        expect(kangaroo(...inputData)).toEqual(outputData);
    });

    it("[0 2 5 3]", () => {
        const inputData = [0, 2, 5, 3];
        const outputData = "NO";
        expect(kangaroo(...inputData)).toEqual(outputData);
    });

    it("[4523 8092 9419 8076]", () => {
        const inputData = [4523, 8092, 9419, 8076];
        const outputData = "YES";
        expect(kangaroo(...inputData)).toEqual(outputData);
    });

});