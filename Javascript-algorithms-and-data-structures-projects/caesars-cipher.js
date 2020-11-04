function rot13(str) {
  str = str.split("");
  let newStr="";
  //let regex = new RegExp(/A-Za-z/g);
  for(let i=0; i<str.length;i++){
    if(str[i].match(/\w/g)!==null){
      if(str[i].charCodeAt(0) - 13 < 65){
        newStr+= String.fromCharCode(90-64+(str[i].charCodeAt(0)-13));
      }else{
        newStr+= String.fromCharCode(str[i].charCodeAt(0)-13);
      }
      //console.log(str[i]);
    }else{
      newStr+=str[i];
    }
  }
  //console.log(str,str[0].charCodeAt(0));
  console.log(newStr);
  return newStr;
}

rot13("SERR CVMMN!");
