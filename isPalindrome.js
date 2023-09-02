var isPalindrome = function (s) {
  let cleaned = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("") ? true : false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
