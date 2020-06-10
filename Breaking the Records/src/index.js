//Check the problem here https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
    let min = scores[0];
    let max = scores[0];
    let minBreakRecords = 0;
    let maxBreakRecords = 0;
    scores.forEach(value => {
        if (value < min) {
            minBreakRecords++;
            min = value;
        } else if (value > max) {
            maxBreakRecords++;
            max = value;
        }
    });
    console.log(minBreakRecords);
    console.log(maxBreakRecords);
    return [maxBreakRecords, minBreakRecords];
}

module.exports = breakingRecords;