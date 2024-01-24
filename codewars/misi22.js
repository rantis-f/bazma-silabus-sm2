function shuffleIt(arr,...c){
    //coding here...
     return c.reduce((result, [i1, i2]) => {
      [result[i1], result[i2]] = [result[i2], result[i1]];
      return result;
    }, [...arr]);
  }