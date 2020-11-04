function sumFibs(num) {
  let fibArr=[1,1];
  let i=0, j=1;
  let sum = fibArr[0]+fibArr[1];
  while(fibArr[fibArr.length-1]<=num){
    fibArr.push(fibArr[i]+fibArr[j]);
    i++;
    j++;
    if(fibArr[j]%2!=0 && fibArr[j]<=num) sum+=fibArr[j];
  }
  console.log(fibArr, sum);
  return sum;
}

sumFibs(4);
