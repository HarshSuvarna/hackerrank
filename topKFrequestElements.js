var topKFrequent = function (nums, k) {
  let count = {};
  let bucket = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = (count[nums[i]] || 0) + 1;
  }

  for (const [num, freq] of Object.entries(count)) {
    bucket[freq] = bucket[freq] ? bucket[freq] : new Set().add(num);
    console.log("bucket[freq] :>> ", bucket[freq]);
  }

  console.log("bucket :>> ", bucket.length);

  for (let i = bucket.length; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }

  return result;
};

console.log(topKFrequent([1, 2, 2, 2, 2, 2, 3, 3, 4, 5,5, 5,5,5,5,5,5,5,5], 2));
