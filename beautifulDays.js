function beautifulDays(i, j, k) {
  let days = [...Array(j - i + 1).keys()].map((x) => x + i);
  let beautifulDayCount = 0;
  days.forEach((day) => {
    if (Math.abs(day - +("" + day).split("").reverse().join("")) % k === 0)
      beautifulDayCount++;
  });
  return beautifulDayCount;
}

console.log(beautifulDays(20, 23, 6));
