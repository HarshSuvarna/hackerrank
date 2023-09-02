var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  return s.length === t.length &&
    s.split("").sort().join("").toLowerCase() ===
      t.split("").sort().join("").toLowerCase()
    ? true
    : false;
};

console.log(isAnagram("aaca", "ccaa"));
