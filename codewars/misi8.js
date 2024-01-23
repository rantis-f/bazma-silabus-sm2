function howManydays(month) {
  var days;
  switch (month) {
    case 2:
      return 28;
    case 4:
      return 30;
    case 6:
      return 30;
    case 9:
      return 30;
    case 11:
      return 30;
    default:
      return 31;
  }
  return days;
}

