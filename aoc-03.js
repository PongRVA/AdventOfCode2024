var fs = require("fs");
var fileToRead = "input-03.txt";
const sampleString =
  "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
const regex = /mul\(\d{1,3},\d{1,3}\)/g;
let sum = 0;
let newSum = 0;

//takes string, extracts numbers using regex, returns product
const parseMul = (str) => {
  const reg = /\b\d+\b/g;
  const factors = str.match(reg).map(Number);
  return factors[0] * factors[1];
};

fs.readFile(fileToRead, "utf8", (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    // data = sampleString; // for toggling sample data

    //part 1: find mul(x,x) using regex, sum all products
    const matches = data.match(regex);
    matches.forEach((match) => {
      sum += parseMul(match);
    });
    console.log("part 1 sum: ", sum);

    //part 2: remove disabled muls
    //delete sections between dont() and do()s
    const doLeadingSubstrings = data.split("do()");
    const substringsMinusDont = doLeadingSubstrings.map((substrings) => {
      if (substrings.indexOf("don't()") !== -1) {
        return substrings.slice(0, substrings.indexOf("don't()"));
      } else {
        return substrings;
      }
    });
    const joinedString = substringsMinusDont.join("");
    const newMatches = joinedString.match(regex);

    newMatches.forEach((newMatch) => {
      newSum += parseMul(newMatch);
    });
    console.log("part 2 sum: ", newSum);
  }
});
