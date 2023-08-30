// function climbingLeaderboard(ranked, player) {
//   // Write your code here
//   let ranks = [];
//   let ranked = Array.from(new Set(ranked));
//   player.forEach((s) => {
//     let temp = [...ranked];
//     temp.push(s);
//     ranks.push(temp.sort((a, b) => b - a).indexOf(s) + 1);
//   });
//   return ranks;
// }

function climbingLeaderboard(leaderBoard, playerScores) {
  let leaderBoardScores = Array.from(new Set(leaderBoard));

  const ranks = [];
  for (const s of playerScores) {
    while (leaderBoardScores && s >= leaderBoardScores.at(-1))
      leaderBoardScores.pop();
    ranks.push(leaderBoardScores.length + 1);
  }
  return ranks;
}

console.log(
  climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
);
