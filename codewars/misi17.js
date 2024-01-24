function firstToLast(str, c) {
  //coding here..
  str = str.toLowerCase();
  c = c.toLowerCase();
  let firstIndex = str.indexOf(c);
  let lastIndex = str.lastIndexOf(c);
  if (firstIndex !== -1 && lastIndex !== -1) return lastIndex - firstIndex;
  else return -1;
}
