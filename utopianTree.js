function utopianTree(n) {
  // Write your code here
  let height = 1;
  if (n === 0) {
    return height;
  }
  for (let i = 1; i <= n; i++) {
    height = i % 2 === 0 ? height + 1 : height * 2;
  }
  return height;
}

console.log(utopianTree(4));
