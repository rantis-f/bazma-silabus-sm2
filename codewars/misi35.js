function thinkingAndTesting(number, base) {
  //coding here...
  return number - Math.pow(base, Math.floor(Math.log(number) / Math.log(base)));
}
