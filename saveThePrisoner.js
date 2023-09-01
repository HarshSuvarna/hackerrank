// function saveThePrisoner(n, m, s) {
//   // Write your code here
//   let r = m % n === 0 ? 0 : (m % n) - 1;
//   return r === 0 ? s : Math.abs(s + r) <= n ? s + r : r - Math.abs(s - n);
// }

function saveThePrisoner(n, m, s) {
    const r = (((m + n) % n) + (s % n) - 1) % n
    return r == 0 ? n : ((r+n) % n)
}

console.log(saveThePrisoner(7 , 19 , 2));
