function getMoneySpent(keyboards, drives, b) {
  let maxInBudget = -1;
  for (const keyboard of keyboards) {
    for (const drive of drives) {
      let total = keyboard + drive;
      if (total <= b && total > maxInBudget) {
        maxInBudget = total;
      }
    }
  }
  return maxInBudget;
}

console.log(getMoneySpent([60, 60, 60], [5, 8, 12], 60));
