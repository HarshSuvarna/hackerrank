function birthdayCakeCandles(candles) {
  // Write your code here
  let count = 0
//   for (const candle of candles) {
    
//   }
  for (let i = 0; i < candles.length; i++) {
    count = candles[i] === Math.max(...candles) ? ++count : count;
    
  }
  return count
}

console.log(birthdayCakeCandles([2,3,4,3]));
