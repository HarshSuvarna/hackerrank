function timeConversion(s) {
  // Write your code here
  let ampm = s.slice(-2);
  let time = s.split(":");
  let hour = +time[0];

  if (ampm === "PM" && hour !== 12) {
    hour += 12;
  } else if (ampm === "AM" && hour === 12) {
    hour = 0;
  }

  time[0] = hour.toString().padStart(2, "0");
  return time.join(":").slice(0,-2);
}

console.log(timeConversion("12:05:45AM"));
