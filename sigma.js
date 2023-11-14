let arr = [3, -6, 27, 101, 50, 0, -20, -21, 19, 6, 4, -10];
let negsum = 0;
let pzcount = 0;
let oddcount = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    negsum += arr[i];
  } else {
    pzcount += 1;
    if (arr[i] % 2 != 0) {
      oddcount += 1;
    }
  }
}

console.log("negsum :>> ", negsum);
console.log("pzcount :>> ", pzcount);
console.log("oddcount :>> ", oddcount);
