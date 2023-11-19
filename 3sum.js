function threeSum(nums) {
  nums.sort();
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    j = i + 1;
    k = nums.length - 1;
    while (j < k) {
      // console.log("in whiel");
      // if (nums[j] === nums[j + 1]) {
      //   j++;
      //   continue;
      // }
      // if (nums[k] === nums[k + 1]) {
      //   k--;
      //   continue;
      // }
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        // while (nums[j] === nums[j + 1]) j++;
        // while (nums[k] === nums[k + 1]) k--;

        j++;
        while (nums[j] === nums[j - 1] && j < k) {
          j++;
        }
        // k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
