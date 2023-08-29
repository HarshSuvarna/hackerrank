function countingValleys(steps, path) {
  let pathArray = path.split("");
  let altitude = 0;
  let valleyCount = 0;
  for (let i = 0; i < pathArray.length; i++) {
    if (altitude === 0 && pathArray[i].toLowerCase() === "d") {
      altitude -= 1;
      valleyCount += 1;
    } else if (pathArray[i].toLowerCase() === "d") {
      altitude -= 1;
    } else {
      altitude += 1;
    }
  }
  return valleyCount;
}

console.log(countingValleys(8, "UDDUDUU"));

// function countingValleys(steps, path) {
//   let pathArray = path.split("");
//   let pathCount = [];
//   let differentials = [];
//   let valleyCount = 0;
//   let count = 0;
//   pathArray.forEach((p, i) => {
//     count++;
//     if (pathArray[i] !== pathArray[i + 1]) {
//       pathCount.push(p === "U" ? count : count * -1);
//       count = 0;
//     }
//   });
//   pathCount.forEach((pc, i) => {
//     differentials.push(
//       i !== 0 ? pc + pathCount.slice(0, i).reduce((a, v) => a + v, 0) : pc
//     );
//   });
//   differentials.forEach((d, i) => {
//     if (
//       Math.sign(d) === -1 &&
//       (Math.sign(differentials[i + 1]) === 1 ||
//         Math.sign(differentials[i + 1]) === 0)
//     )
//       valleyCount++;
//   });
//   return valleyCount;
// }
