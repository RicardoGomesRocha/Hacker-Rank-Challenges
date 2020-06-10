const kangaroo = require('./index');

describe("Apple and Oranges problem test suit", () => {

    it("[0 3 4 2]", () => {
        const inputData = [7, 11, 5, 15, [-2, 2, 1],
            [5, -6]
        ];
        const outputData = [1, 1];
        expect(kangaroo(...inputData)).toEqual(outputData);
    });

});