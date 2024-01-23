function padIt(str, n) {
  let star = "*";

  while (n > 0) {
    if (n % 2) {
      str = star + str;
    } else {
      str += star;
    }
    n--;
  }

  return str;
}
