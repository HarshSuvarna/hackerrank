function designerPdfViewer(h, word) {
  // Write your code here
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());

  return (
    Math.max(...word.split("").map((letter) => h[alphabet.indexOf(letter)])) *
    word.length
  );
}

console.log(
  designerPdfViewer(
    [
      1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      5,
    ],
    "efg"
  )
);
