function howManySmaller(arr, n) {
    //coding here.
   for (let i = 0; i < arr.length; i++) {
      arr[i] = parseFloat(arr[i].toFixed(2));
    }
  
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < n) {
        count++;
      }
    }
  
    return count;
  }