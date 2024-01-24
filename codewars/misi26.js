function isolateIt(arr){
    //coding here...
      const result = arr.map(str => {
      const mid = Math.floor(str.length / 2);
      
      if (str.length % 2 === 0) {
        return str.slice(0, mid) + '|' + str.slice(mid);
      } else {
        return str.slice(0, mid) + '|' + str.slice(mid + 1);
      }
    });
  
    return result;
  }