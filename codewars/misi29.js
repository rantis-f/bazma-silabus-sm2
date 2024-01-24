function bigToSmall(arr) {
  //coding here...
  const flatArray = arr.flat();

  const sortArray = flatArray.sort((a, b) => b - a);

  const result = sortArray.join(">");

  return result;
}
