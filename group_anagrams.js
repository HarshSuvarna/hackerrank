var groupAnagrams = function (strs) {
  hashmap = {};

  for (let i = 0; i < strs.length; i++) {
    let s = strs[i].split("").sort().join("").toLowerCase();
    if (s in hashmap) {
      hashmap[s].push(strs[i]);
    } else {
      hashmap[s] = [strs[i]];
    }
  }
  return Object.values(hashmap);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
