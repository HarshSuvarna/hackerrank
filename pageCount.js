function pageCount(n, p) {
  let pagesToTurnFromFront = p % 2 === 0 ? p / 2 : (p - 1) / 2;
  let lastPage = n % 2 === 0 ? n / 2 : (n - 1) / 2;
  pagesToTurnFromBack = lastPage - pagesToTurnFromFront;
  return Math.min(pagesToTurnFromFront, pagesToTurnFromBack);
}

pageCount(15, 1);
