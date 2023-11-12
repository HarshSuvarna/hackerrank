var isAnagram = function (s, t) {
  let countS = {};
  let countT = {};

  if (s.length !== t.length) {
    return false;
  }
  t = t.toLowerCase();
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    countS[s[i]] = (countS[s[i]] || 0) + 1;
    countT[t[i]] = (countT[t[i]] || 0) + 1;
  }

  for (const val of Object.keys(countS)) {
    if (countS[val] !== (countT[val] || 0)) {
      return false;
    }
  }
  return true;
};

// var isAnagram = function (s, t) {
//   console.log("s.sort :>> ", s.split("").sort());
//   console.log("t.sort: ", t.split("").sort());
// };

console.log(isAnagram("anagram", "naaramg"));
