function sortIt(arr) {
  //coding here...
  const countMap = arr.reduce((map, num) => {
    map[num] = (map[num] || 0) + 1;
    return map;
  }, {});
  
  const sorted = arr.slice().sort((a, b) => {
    if (countMap[a] !== countMap[b]) {
      return countMap[a] - countMap[b];
    } else {
      return b - a;
    }
  });

  return sorted;
}
