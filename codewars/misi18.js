function splitAndMerge(string, separator) {
    let words = string.split(' ');
    let modifiedWords = words.map(word => word.split('').join(separator));
    let result = modifiedWords.join(' ');
    return result
  }