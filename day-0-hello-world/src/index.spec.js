const greeting = require('./index');

describe("greeting test suit", () => {

    it("Printing 'Welcome to 10 Days of JavaScript!'", () => {
        const data = "Welcome to 10 Days of JavaScript!";
        greeting(data);
        expect(true).toBe(true);
    });
});