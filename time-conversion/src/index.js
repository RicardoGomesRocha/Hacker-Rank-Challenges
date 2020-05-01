//check the problem here https://www.hackerrank.com/challenges/time-conversion/problem

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    const lastTwoLetters = `${s[s.length - 2]}${s[s.length - 1]}`;
    const auxiliarString = s.substring(0, s.length - 2);

    if (lastTwoLetters.toLowerCase() === "pm") {
        const timeDivision = auxiliarString.split(':');
        if (timeDivision[0] > 11) {
            return auxiliarString;
        }
        timeDivision[0] = parseInt(timeDivision[0]) + 12 + "";
        return timeDivision.join(':');
    } else if (lastTwoLetters.toLowerCase() === "am") {
        const timeDivision = auxiliarString.split(':');
        if (timeDivision[0] > 11) {
            timeDivision[0] = parseInt(timeDivision) - 12;
            if (timeDivision[0] < 10) {
                timeDivision[0] = `0${timeDivision[0]}`
            }
        }
        return timeDivision.join(':');
    } else {
        return s;
    }
}

module.exports = timeConversion;