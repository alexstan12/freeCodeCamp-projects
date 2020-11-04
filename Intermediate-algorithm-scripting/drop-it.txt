function dropElements(arr, func) {
  let newArr = [];
  console.log(newArr);
  for(let i=0; i<arr.length; i++){
    if(func(arr[i])){
      newArr = arr.slice(i);
      console.log(newArr);
      return newArr;
    }
  }
  return newArr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});
