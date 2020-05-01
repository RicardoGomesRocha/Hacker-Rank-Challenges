const performOperation = require('./index');

describe("performOperation test suit", () => {

    it("Running function performOperation", () => {
        performOperation("1", "2.3", "some word spaced");
        expect(true).toBe(true);
    });
});