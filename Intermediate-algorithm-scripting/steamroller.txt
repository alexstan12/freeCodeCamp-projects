function steamrollArray(arr) {
  let newArr=[];
  function checkIfArr(x,newArr){
    if(!Array.isArray(x)){
      newArr.push(x);
    }else{
      for(let i=0; i<x.length; i++){
        //console.log(checkIfArr(x[i]));
        checkIfArr(x[i], newArr);
      }
    }
    return newArr;
  }
  
  return checkIfArr(arr,newArr);
  
}

steamrollArray([1, [2], [3, [[4]]]]);
