//Check the problem here https://www.hackerrank.com/challenges/grading/problem

// Complete the kangaroo function below.
// x1, v1: integers, starting position and jump distance for kangaroo 1
// x2, v2: integers, starting position and jump distance for kangaroo 2
function kangaroo(x1, v1, x2, v2) {
    if (!meetProblemConstrains(x1, v1, x2, v2) || v2 >= v1) {
        return "NO"
    }

    while (x1 <= x2) {
        if (x1 === x2) {
            return "YES";
        }
        x1 += v1;
        x2 += v2;
    }
    return "NO";
}

function meetProblemConstrains(x1, v1, x2, v2) {
    return x1 < x2 &&
        x1 <= 10000 && x1 >= 0 &&
        x2 <= 10000 && x2 >= 0 &&
        v1 <= 10000 && v1 >= 1 &&
        v2 <= 10000 && v2 >= 1 &&
        v1 > v2;
}


module.exports = kangaroo;