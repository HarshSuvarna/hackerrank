function sortedSum(a) {
  // Write your code here
  let s = 0;
  let f = 0;
  let b =[];
  for (let i = 1; i <= a.length; i++) {
    f=0
    b = a.slice(0, i);
    b.sort();
    for (let j = 0; j < i; j++) {
      f += (j+1) * b[j];
    }
    s += f;
  }
  return s;
}

console.log(sortedSum([9,5,8]));
