var longestCommonPrefix = function (strs) {
  let commonStringAccumulator = "";

  for (let i = 0; i < strs[0].length; i++) {
    let letter = strs[0][i];
    if (strs.every((str) => str[i] === letter)) {
      commonStringAccumulator += letter;
    } else break;
  }
  return commonStringAccumulator;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
