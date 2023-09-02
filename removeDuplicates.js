// var removeDuplicates = function (nums) {
//   return Array.from(new Set(nums)).length;
// };

var removeDuplicates = function (nums) {
  let j = 0;
  let numLen = nums.length;
  for (let i = 0; i < numLen; i++) {
    if (nums[j] === nums[j + 1]) {
      nums.splice(j, 1);
    } else {
      j++;
    }
  }
  return nums.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
