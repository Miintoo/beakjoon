const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split('\n');


const T = +input[0];

// for (let i = 1; i < input.length - 1; i++) {
//   input[i] = input[i].slice(0, -1);
// }

for (let i = 1; i <= T; i++) {
  const stack = [];
  let isVPS = true;
  let VPS = input[i];

  for (let j = 0; j < VPS.length; j++) {
    if (VPS[j] === '(') {
      stack.push('(');
    } else if (VPS[j] === ')') {
      if (stack.length === 0) {
        isVPS = false;
        break;
      } else {
        stack.pop();
      }
    }
  }
  if (isVPS && stack.length === 0) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

