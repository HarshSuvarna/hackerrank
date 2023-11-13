var productExceptSelf = function (nums) {
  let output = [];
  let postFix = 1;
  output[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    output[i] = nums[i - 1] * output[i - 1];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = postFix * output[i];
    postFix = postFix * nums[i];
  }
  return output;
};

productExceptSelf([2, 5, 3, 4]);
