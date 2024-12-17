var fs = require("fs");
var fileToRead = "input-04.txt";
let foundSum = 0;
let partTwoSum = 0;

fs.readFile(fileToRead, "utf8", (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    const arr = data.split("\n");
    //PART 1 ////////////////////////////////
    //East
    for (let row = 0; row < arr.length; row++) {
      for (let col = 0; col < arr[row].length - 3; col++) {
        if (
          arr[row][col] === "X" &&
          arr[row][col + 1] === "M" &&
          arr[row][col + 2] === "A" &&
          arr[row][col + 3] === "S"
        ) {
          foundSum += 1;
        }
      }
    }
    //West
    for (let row = 0; row < arr.length; row++) {
      for (let col = 3; col < arr[row].length; col++) {
        if (
          arr[row][col] === "X" &&
          arr[row][col - 1] === "M" &&
          arr[row][col - 2] === "A" &&
          arr[row][col - 3] === "S"
        ) {
          foundSum += 1;
        }
      }
    }
    //North
    for (let row = 3; row < arr.length; row++) {
      for (let col = 0; col < arr[row].length; col++) {
        if (
          arr[row][col] === "X" &&
          arr[row - 1][col] === "M" &&
          arr[row - 2][col] === "A" &&
          arr[row - 3][col] === "S"
        ) {
          foundSum += 1;
        }
      }
    }
    //South
    for (let row = 0; row < arr.length - 3; row++) {
      for (let col = 0; col < arr[row].length; col++) {
        if (
          arr[row][col] === "X" &&
          arr[row + 1][col] === "M" &&
          arr[row + 2][col] === "A" &&
          arr[row + 3][col] === "S"
        ) {
          foundSum += 1;
        }
      }
    }
    //North East
    for (let row = 3; row < arr.length; row++) {
      for (let col = 0; col < arr[row].length - 3; col++) {
        if (
          arr[row][col] === "X" &&
          arr[row - 1][col + 1] === "M" &&
          arr[row - 2][col + 2] === "A" &&
          arr[row - 3][col + 3] === "S"
        ) {
          foundSum += 1;
        }
      }
    }
    //South East
    for (let row = 0; row < arr.length - 3; row++) {
      for (let col = 0; col < arr[row].length - 3; col++) {
        if (
          arr[row][col] === "X" &&
          arr[row + 1][col + 1] === "M" &&
          arr[row + 2][col + 2] === "A" &&
          arr[row + 3][col + 3] === "S"
        ) {
          foundSum += 1;
        }
      }
    }
    //North West
    for (let row = 3; row < arr.length; row++) {
      for (let col = 3; col < arr[row].length; col++) {
        if (
          arr[row][col] === "X" &&
          arr[row - 1][col - 1] === "M" &&
          arr[row - 2][col - 2] === "A" &&
          arr[row - 3][col - 3] === "S"
        ) {
          foundSum += 1;
        }
      }
    }
    // //South West
    for (let row = 0; row < arr.length - 3; row++) {
      for (let col = 3; col < arr[row].length; col++) {
        if (
          arr[row][col] === "X" &&
          arr[row + 1][col - 1] === "M" &&
          arr[row + 2][col - 2] === "A" &&
          arr[row + 3][col - 3] === "S"
        ) {
          foundSum += 1;
        }
      }
    }
    console.log(
      foundSum,
      "occurances of 'XMAS' in all directions in file",
      fileToRead
    );
    //PART 2 ////////////////////////////////
    for (let row = 1; row < arr.length - 1; row++) {
      for (let col = 1; col < arr[row].length - 1; col++) {
        let center = arr[row][col];
        let ul = arr[row - 1][col - 1];
        let ur = arr[row - 1][col + 1];
        let ll = arr[row + 1][col - 1];
        let lr = arr[row + 1][col + 1];

        if (center === "A" && ul !== lr && ul !== "X") {
          if (
            (ul === ur && ll === lr) ||
            (ur === lr && ul === ll) ||
            (lr === ll && ur === ul) ||
            (ll === ul && ur === lr)
          ) {
            partTwoSum += 1;
          }
        }
      }
    }
    console.log(partTwoSum);
  }
});
