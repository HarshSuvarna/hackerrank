var twoSum = function (nums, target) {
  let hashMap = {};

  //   for (let i = 0; i < nums.length; i++) {
  //     hashMap[nums[i]] = i;
  //   }

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in hashMap) {
      return [hashMap[diff], i];
    }
    hashMap[nums[i]] = i;
  }
  return [];
};

console.log("twoSum([2,7,11,15], 9) :>> ", twoSum([2, 7, 11, 15], 9));
