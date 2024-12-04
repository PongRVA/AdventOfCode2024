var fs = require("fs");
var fileToRead = "input-02.txt";
let totalDistances = 0;
let simScore = 0;
let numsArr = [];
let totalSafe = 0;

const isInc = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};
const isDec = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) return false;
  }
  return true;
};
const isDiffByOneThruThree = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) < 1 || Math.abs(arr[i] - arr[i + 1]) > 3)
      return false;
  }
  return true;
};

const isSafe = (arr) => {
  if (
    (isInc(arr) && isDiffByOneThruThree(arr)) ||
    (isDec(arr) && isDiffByOneThruThree(arr))
  ) {
    return true;
  }
  return false;
};

fs.readFile(fileToRead, "utf8", (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    //create array of strings separated by new line
    const lines = data.split("\n");
    //create subarray of nums for each line
    lines.forEach((line) => {
      numsArr.push(line.split(/\s+/).map((char) => Number(char)));
    });

    // console.log(numsArr);
    numsArr.forEach((report) => {
      if (isSafe(report)) {
        totalSafe++;
      }
    });
    console.log(totalSafe);

    //The levels are either all increasing or all decreasing.

    //Any two adjacent levels differ by at least one and at most three.

    //Dec 1 part 2 Similarity Score
    //outer loop left list
    //inner loop right list
    //number of matches x actual number tallied to similarity score
  }
});
