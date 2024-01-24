function threeInOne(arr){
    //coding here...
     const result = [];
  
    for (let i = 0; i < arr.length; i += 3) {
      const sum = arr.slice(i, i + 3).reduce((acc, val) => acc + val, 0);
      result.push(sum);
    }
  
    return result;
  }