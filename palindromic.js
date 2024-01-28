function processData(input) {
  //Enter your code here
  let intInput = parseInt(input);
  let notFound = true;
  while (notFound) {
    intInput++;
    strInput = String(intInput);
    let left = 0;
    let right = strInput.length - 1; // Fix: Initialize 'right' correctly
    let isPalindrom = true;
    while (left <= right) {
      if (strInput[left] !== strInput[right]) isPalindrom = false;
      left++;
      right--;
    }
    if (isPalindrom) {
      console.log(intInput);
      return intInput;
    } else continue;
  }
}

console.log(processData("808"));
