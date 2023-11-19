var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (true) {
    if (numbers[left] + numbers[right] > target) {
      right--;
    } else if (numbers[left] + numbers[right] === target) {
      return [left, right];
    } else {
      left++;
    }
  }
};

console.log(twoSum([2,7,11,15], 9));
