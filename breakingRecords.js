function breakingRecords(scores) {
  // Write your code here
  let lowScoreBreakCount = 0;
  let highScoreBreakCount = 0;
  let lowestScore = scores[0];
  let highestScore = scores[0];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < lowestScore) {
      lowScoreBreakCount++;
      lowestScore = scores[i];
    } else if (scores[i] > highestScore) {
      highScoreBreakCount++;
      highestScore = scores[i];
    }
  }
    return [highScoreBreakCount, lowScoreBreakCount];
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
