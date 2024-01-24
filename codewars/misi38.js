function findSimilarity(str,word){
    //coding here...
      const wordsArray = str.split(' ');
  
    const similarWords = wordsArray.filter(w =>
      w.length === word.length &&
      w.charAt(0) === word.charAt(0) &&
      w.charAt(w.length - 1) === word.charAt(word.length - 1)
    );
  
    return similarWords.join(' ');
  }