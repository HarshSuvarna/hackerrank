function migratoryBirds(arr) {
  let obj = {};
  let maxBirdIds = [];
  for (const el of arr) {
    obj[el] = !Object.keys(obj).includes(el.toString()) ? 1 : ++obj[el];
  }
  Object.keys(obj).forEach((el) => {
    if (obj[el] === Math.max(...Object.values(obj))) maxBirdIds.push(+el);
  });

  return Math.min(...maxBirdIds);
}

console.log(migratoryBirds([1, 2, 2, 3, 3]));
