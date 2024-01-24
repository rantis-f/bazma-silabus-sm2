function topSecret(str) {
  //coding here...
  let s = str.split("");

  for (let i = 0; i < s.length; i++) {
    s[i] = String.fromCharCode(s[i].charCodeAt() - 3);
    let r = s[i].charCodeAt();
    if ((r < 97 && r > 90) || (r < 65 && r > 58)) {
      s[i] = String.fromCharCode(r + 26);
    }
    if (r < 57) {
      s[i] = String.fromCharCode(r + 3);
    }
  }
  return s.join("");
}

//question1: The top secret file number is...
answer1 = "2502";
//question2: Super agent's name is...
answer2 = "lmCCR";
//question3: He stole the treasure is...
answer3 = "Apple core";
