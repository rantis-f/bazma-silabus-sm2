function cutCube(volume,n){
    //coding here...
  return !(Math.cbrt(n) % 1) && !(Math.cbrt(volume / n) % 1);
  }