const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

let count = 0;
const stack = [];
let isPop = false;

for (let i = 0; i < input.length; i++) {
  if (input[i] === '(') {
    stack.push(input[i]);
    isPop = true;
  } else {
    stack.pop();
    if (isPop) {
      count += stack.length;
      isPop = false;
    } else {
      count += 1;
    }
  }
}

console.log(count);