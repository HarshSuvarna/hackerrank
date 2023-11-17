function longestSequence(nums) {
  let numSet = new Set(nums);
  let longest = 0;
  for (const num of nums) {
    if (!numSet.has(num - 1)) {
      length = 0;
      while (numSet.has(num + length)) {
        length++;
      }
      longest = Math.max(length, longest);
    }
  }
  return longest;
}

console.log(longestSequence([100, 4, 200, 1, 3, 2]));
