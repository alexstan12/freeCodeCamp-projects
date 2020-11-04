function smallestCommons(arr) {
  
  function isMultipleValid(min, max, multiple){
    for(let i=min;i<=max;i++){
      if(multiple%i!=0){
        return false;
      }
    }
    return true;
  }

  let min = Math.min(arr[0],arr[1]);
  let max = Math.max(arr[0],arr[1]);
  let multiple = max; // can be max or min, since it has to be    multiple of both
  while(!isMultipleValid(min,max, multiple)){
      multiple+=max;
  }
  console.log(multiple);
  return multiple;

}


smallestCommons([5,1]);
