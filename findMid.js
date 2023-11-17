function findMid(nums) {
  let slow = 0;
  let fast = 0;

  while (fast < nums.length) {
    ++slow;
    fast += 2;
  }
  return nums[slow];
}

console.log(findMid([2, 1, 8, 5, 4, 0, 8, 9, 9, 2]));
