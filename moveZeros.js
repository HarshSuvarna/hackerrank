function moveZeros(nums) {
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    console.log("left, right :>> ", left, right);
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
    console.log("nums :>> ", nums);
  }
  return nums;
}

console.log(moveZeros([2, 1, 0, 3, 12]));
