var fs = require("fs");
var fileToRead = "input-02.txt";
let totalDistances = 0;
let simScore = 0;
let numsArr = [];
let totalSafe = 0;
let totalUnsafe = 0;
let totalLinesChecked = 0;
let unSafeReports = [];
let madeSafe = 0;

//boolean function to determine if array is increasing
const isInc = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) return false;
  }
  return true;
};

//boolean function to determine if array is decreasing
const isDec = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1]) return false;
  }
  return true;
};

//boolean function to determine if any two adjacent levels
//differ by at least one and at most three
const isDiffByOneThruThree = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) < 1 || Math.abs(arr[i] - arr[i + 1]) > 3)
      return false;
  }
  return true;
};

//boolean function to determine if array is safe
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

    numsArr.forEach((report) => {
      totalLinesChecked++;
      if (isSafe(report)) {
        totalSafe++;
      } else {
        //create new array of unsafe reports
        unSafeReports.push(report);
        totalUnsafe++;
      }
    });

    //outer loop through all unsafe reports
    //inner loop through each level of report
    //omit level and if safe,tally madeSafe, break out of inner loop
    unSafeReports.forEach((unSafeReport) => {
      for (let i = 0; i < unSafeReport.length; i++) {
        if (isSafe(unSafeReport.toSpliced(i, 1))) {
          madeSafe++;
          break;
        }
      }
    });

    console.log("reports checked: " + totalLinesChecked);
    console.log("safe: " + totalSafe);
    console.log("unsafe: " + totalUnsafe);
    console.log("madeSafe ", madeSafe);
    console.log("updated safe reports: ", totalSafe + madeSafe);
  }
});
