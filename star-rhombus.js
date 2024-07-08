const stars = (x, y) => {
  let row = "";
  for (let k = 0; k <= (y - x) / 2; k++) {
    row = row + " ";
  }
  for (let i = 0; i < x; i++) {
    row = row + "*";
  }
  return row;
};

const columns = (y) => {
  for (let i = 0; i < y; i++) {
    console.log(stars(2 * i + 1, 2 * y - 1));
  }
  for (let i = y - 2; i >= 0; i--) {
    console.log(stars(2 * i + 1, 2 * y - 1));
  }
};

columns(4);
