function palindrome(str) {
  let newStr = str.replace(/[^A-Za-z\d]/gi,"").toLowerCase();
  console.log(newStr);
  let i=0, j=newStr.length-1;
  while(i<=j){
    if(newStr[i]!==newStr[j]){
      return false;
    }
    i++;
    j--
  }
  return true;
}



palindrome("2_A3*3#A2");
