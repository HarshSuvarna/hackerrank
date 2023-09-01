// function viralAdvertising(n) {
//   // Write your code here
//   let shared = 5;
//   let liked = 2;
//   let cumulative = 2;
//   for (let i = 2; i <= n; i++) {
//     shared = liked * 3;
//     liked = Math.floor(shared / 2);
//     cumulative += liked;
//   }
//   return cumulative;
// }


//using recursion
function viralAdvertising(n, shared = 5, liked = 2, cumulative = 2) {
  if (n === 1) {
    return cumulative;
  } else {
    shared = liked * 3;
    liked = Math.floor(shared / 2);
    cumulative += liked;
    return viralAdvertising(n - 1, shared, liked, cumulative);
  }
}

console.log(viralAdvertising(5));
