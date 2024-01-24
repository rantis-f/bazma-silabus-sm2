function countGrade(scores){
    //coding here...
      const gradeCount = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 };
  
    scores.forEach(score => {
      switch (true) {
        case score === 100:
          return gradeCount['S']++;
        case score < 100 && score >= 90:
          return gradeCount['A']++;
        case score < 90 && score >= 80:
          return gradeCount['B']++;
        case score < 80 && score >= 60:
          return gradeCount['C']++;
        case score < 60 && score >= 0:
          return gradeCount['D']++;
        case score === -1:
          return gradeCount['X']++;
      }
    });
  
    return gradeCount;
  }