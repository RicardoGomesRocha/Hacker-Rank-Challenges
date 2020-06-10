//Check the problem here https://www.hackerrank.com/challenges/apple-and-orange/problem

// Complete the countApplesAndOranges function below.
// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam 's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    console.log(getNumberOfFruits(s, t, a, apples));
    console.log(getNumberOfFruits(s, t, b, oranges));
}

function getNumberOfFruits(startHouseLocation, endHouseLocation, treePosition, fruits) {
    let fruitsNumber = 0;
    fruits.forEach((value) => {
        const fruit = treePosition + value;
        if (fruit >= startHouseLocation && fruit <= endHouseLocation) {
            fruitsNumber++;
        }
    });
    return fruitsNumber;
}

module.exports = countApplesAndOranges;