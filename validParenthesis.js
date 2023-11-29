var isValid = function (s) {
  let stack = [];
  let closeToOpen = { "}": "{", ")": "(", "]": "[" };
  for (const b of s) {
    if (closeToOpen[b]) {
      if (stack.length && stack[stack.length - 1] === closeToOpen[b]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(b);
    }
  }
  return stack.length ? false : true;
};

console.log(isValid("]()"));
