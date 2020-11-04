function binaryAgent(str) {
  str = str.split(" ");
  let newStr = "";
  for(let i=0; i<str.length; i++){
    newStr+= String.fromCharCode(parseInt(str[i],2))
  }
  console.log(newStr);
  return newStr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
