var generateParenthesis = function (n) {
  let res = [];
  backtrack(0, 0, n, res, "");
  return res;
};
function backtrack(openN, closeN, n, res, current) {
  if (openN == n && closeN == n) {
    res.push(current);
    return;
  }
  if (openN < n) {
    backtrack(openN + 1, closeN, n, res, current + "(");
  }

  if (closeN < openN) {
    backtrack(openN, closeN + 1, n, res, current + ")");
  }
}

console.log(generateParenthesis(3));
