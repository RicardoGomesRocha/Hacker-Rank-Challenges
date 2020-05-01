//Check the problem here https://www.hackerrank.com/challenges/grading/problem

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */
function gradingStudents(grades) {
    roundGrad
    return grades.map(grade => roundGrad(grade));
}

/**
 * Round a given grade.
 * @param {number} grade Grade to be rounded.
 * @returns {number} Grade rounded.
 */
function roundGrad(grade) {
    if (grade < 38) {
        return grade;
    }
    const nextMultipleOfFive = getNextMultipleOfFive(grade);
    if (nextMultipleOfFive - grade < 3) {
        return nextMultipleOfFive
    }
    return grade;
}

/**
 * Givin a number, gets the which is multiple of 5.
 * This functions is recursive.
 * @param {number} number Number to be infer the next multiple of 5.
 */
function getNextMultipleOfFive(number) {
    return (number % 5 === 0) ? number : getNextMultipleOfFive(number + 1);

}

module.exports = gradingStudents;