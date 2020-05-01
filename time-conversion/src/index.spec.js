const timeConversion = require('./index');

describe("TimeConverstion test suit", () => {

    it("00:00:00", () => {
        const data = "00:00:00";
        expect(timeConversion('00:00:00')).toBeTruthy();
    });

    it("12:40:22AM", () => {
        const data = "12:40:22AM";
        expect(timeConversion(data)).toBe('00:40:22');
    });

    it("12:40:22PM", () => {
        const data = "12:40:22PM";
        expect(timeConversion(data)).toBe('12:40:22');
    });
});