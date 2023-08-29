function bonAppetit(bill, k, b) {
  let anaShare = bill.reduce((a, v, i) => (i === k ? a : a + v), 0) / 2;
  console.log(anaShare === b ? "Bon Appetit" : b - anaShare);
}

bonAppetit([3, 10, 2, 9], 1, 12);
