function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let applesInRange = 0;
  let orangesInRange = 0;
  apples.forEach((apple) => {
    let pos = apple + a;
    applesInRange = pos >= s && pos <= t ? ++applesInRange : applesInRange;
  });
  oranges.forEach((orange) => {
    let pos = orange + b;
    orangesInRange = pos >= s && pos <= t ? ++orangesInRange : orangesInRange;
  });
  console.log(applesInRange);
  console.log(orangesInRange);
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
