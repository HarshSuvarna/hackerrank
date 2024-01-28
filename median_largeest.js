function processData(inputs) {
  const numbers = inputs.split(" ").map(Number);

  const secondLargest = findSecondLargest(numbers);
  const thirdSmallest = findThirdSmallest(numbers);
  const median = calculateMedian(numbers);

  const result = (median + secondLargest + thirdSmallest).toFixed(1);
  console.log(result);
}

function findSecondLargest(arr) {
  const sortedArr = arr.slice().sort((a, b) => b - a);
  return sortedArr[1];
}

function findThirdSmallest(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  return sortedArr[2];
}

function calculateMedian(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const middle = Math.floor(sortedArr.length / 2);

  return arr.length % 2 !== 0
    ? sortedArr[middle]
    : (sortedArr[middle - 1] + sortedArr[middle]) / 2;
}

console.log("processData:>> ", processData("1 2 3"));
