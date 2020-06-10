// Check the problem here https://www.hackerrank.com/challenges/between-two-sets/problem

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */
function getTotalX(a, b) {
    if (a.length < 1 && a.length > 10 && b.length < 1 && b.length > 10) {
        return false;
    }

    let numberOfFactors = 0;
    //assuming a is order
    for (let i = 1; i <= 100; i++) {
        const arrayAFactor = isFactorNumberForArray(a, i);
        const arrayBFactor = isFactorNumberForArray(b, i, true);
        if (arrayAFactor && arrayBFactor) {
            numberOfFactors++;
        }
    }
    return numberOfFactors;
}

function isFactorNumberForArray(array, factorNumber, arrayFirst) {
    for (let i = 0; i < array.length; i++) {
        if (!arrayFirst && !isFactor(factorNumber, array[i])) {
            return false;
        } else if (!isFactor(array[i], factorNumber) && arrayFirst) {
            return false;
        }
    }
    return true;
}


function isFactor(firstNumber, secondNumber) {
    return firstNumber % secondNumber === 0;
}

module.exports = getTotalX;