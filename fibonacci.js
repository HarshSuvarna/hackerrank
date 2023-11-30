function fibRec(n) {
  let fibCache = Array(n + 1).fill(0);
  let res = fibonacci(n);
//   console.log("fibCache :>> ", fibCache);

  function fibonacci(n) {
    if (n <= 1) {
      return n;
    }

    if (fibCache[n] != 0) {
      return fibCache[n];
    }

    let nthfibnumber = fibonacci(n - 1) + fibonacci(n - 2);
    fibCache[n] = nthfibnumber;
    return nthfibnumber;
  }

  return res;
}

console.log(fibRec(100));
