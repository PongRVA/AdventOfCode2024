var fs = require("fs");
var fileToRead = "input-01.txt";
const arr1 = [];
const arr2 = [];
let totalDistances = 0;
let simScore = 0;

fs.readFile(fileToRead, "utf8", (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    //create array of strings separated by new line
    const lines = data.split("\n");

    //take first number in line, store in arr1
    //take second number in line, store in arr2
    lines.forEach((line) => {
      arr1.push(Number(line.substring(0, 5)));
      arr2.push(Number(line.substring(7)));
    });

    //sort each array ascending order
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    //loop through both arrays, tally distance between corresponding elements
    for (let i = 0; i < arr1.length; i++) {
      totalDistances += Math.abs(arr1[i] - arr2[i]);
    }
    // console.log(totalDistances);

    //Dec 1 part 2 Similarity Score
    //outer loop left list
    arr1.forEach((leftNum) => {
      let numMatches = 0;
      arr2.forEach((rightNum) => {
        if (leftNum === rightNum) {
          numMatches++;
        }
      });
      simScore += leftNum * numMatches;
    });
    //inner loop right list
    //number of matches x actual number tallied to similarity score
    console.log(simScore);
  }
});
