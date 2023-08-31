function hurdleRace(k, height) {
  let maxheight = Math.max(...height);
  return maxheight > k ? maxheight - k : 0;
}
console.log(hurdleRace(7, [2, 7, 4, 5, 2]));
