function formingMagicSquare(s) {
  const magicSquares = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
  ];
  let minCost = 1000;
  for (let p = 0; p < magicSquares.length; p++) {
    let currCost = 0;
    for (let i = 0; i < magicSquares[p].length; i++) {
      for (let j = 0; j < magicSquares[p][i].length; j++) {
        currCost += Math.abs(s[i][j] - magicSquares[p][i][j]);
      }
    }
    if (currCost < minCost) {
      minCost = currCost;
    }
  }
  return minCost;
}

console.log(
  formingMagicSquare([
    [5, 3, 4],
    [1, 5, 8],
    [6, 4, 2],
  ])
);
