function maxMin(arr1, arr2) {
  //coding here...
  const differences = arr1.map((value, index) => Math.abs(value - arr2[index]));
  const maxvalue = Math.max(...differences);
  const minvalue = Math.min(...differences);

  return [maxvalue, minvalue];
}
