function catAndMouse(x, y, z) {
  return Math.abs(x - z) < Math.abs(y - z)
    ? "Cat A"
    : Math.abs(x - z) === Math.abs(y - z)
    ? "Mouse C"
    : "Cat B";
}

console.log(catAndMouse());
