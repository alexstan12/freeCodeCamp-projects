function addTogether() {
  let args = [...arguments];
  if(args[0]===parseInt(args[0])){
    if(args.length>1){
      if(args[1]!==parseInt(args[1])){
        return undefined;
      }
      return args[0]+args[1];
    }else{
    return function(y) {
      if(parseInt(y)===y){
           return args[0] + y;
      }
        } 
      
    }
  }
}

console.log(addTogether(2)([3]));
addTogether(2)([3]);