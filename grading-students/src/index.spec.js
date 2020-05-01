const gradingStudents = require('./index');

describe("Grading students test suit", () => {

    it("[73, 67, 38, 33]", () => {
        const inputData = [73, 67, 38, 33];
        const outputData = [75, 67, 40, 33]
        expect(gradingStudents(inputData)).toEqual(outputData);
    });


    it("Test the extremes values: [0, 100]", () => {
        const inputData = [0, 100, 40, 37];
        const outputData = [0, 100, 40, 37];
        expect(gradingStudents(inputData)).toEqual(outputData);
    });

});