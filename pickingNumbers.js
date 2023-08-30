function pickingNumbers(a) {
  let maxSquenceLength = 0;
  for (const x of a) {
    let currSeqCount = 0;
    for (const y of a) {
      if (y === x || y === x - 1) currSeqCount++;
    }
    if (maxSquenceLength < currSeqCount) maxSquenceLength = currSeqCount;
  }
  return maxSquenceLength;
}

console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]));
