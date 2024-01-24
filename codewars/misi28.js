function mirrorImage(arr){
    //coding here...
    for (let i = 0; i < arr.length - 1; i++) {
      const num1 = arr[i];
      const num2 = arr[i + 1];
  
      const str1 = String(num1);
      const str2 = String(num2);
  
      if (str1 === str2.split('').reverse().join('')) {
        return [num1, num2];
      }
    }
  
    return [-1, -1];
  }