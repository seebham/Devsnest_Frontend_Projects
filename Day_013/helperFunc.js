function concatit(arr, delimiter = " • ") {
  str = "";
  arr.forEach((el, ind) => {
    if (arr.length === ind + 1) {
      str += el;
      return str;
    }
    str += el + delimiter;
  });
  return str;
}
