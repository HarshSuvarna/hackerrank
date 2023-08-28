function gradingStudents(grades) {
  // Write your code here
  return grades.map((g) => {
    let rounded = g % 5 !== 0 ? (Math.floor(g / 5) + 1) * 5 : g;
    return g < 38 || rounded - g > 2 ? g : rounded;
  });
}

console.log(gradingStudents([73, 67, 38, 33]));
