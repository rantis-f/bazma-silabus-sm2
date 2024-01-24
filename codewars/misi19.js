function alienLanguage(str) {
  //coding here...
  return str
    .split(" ")
    .map(
      (word) => word.slice(0, -1).toUpperCase() + word.slice(-1).toLowerCase()
    )
    .join(" ");
}
