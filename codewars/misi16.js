function cutIt(arr) {
  //coding here...
  let text = [];
  let minLength = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    if (str.length < minLength) {
      minLength = str.length;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    let cutStr = str.slice(0, minLength);
    text.push(cutStr);
  }

  return text;
}
