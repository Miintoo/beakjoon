const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString();

const S = +input;

let result;

if (S === 1 || S === 2) {
  result = 1;
} else {
  for (let i = 1; i <= 4294967295; i++) {

    const sum = (i * (i + 1)) / 2;
    if (sum > S) {
      result = i - 1;
      break;
    }
  }
}



console.log(result);