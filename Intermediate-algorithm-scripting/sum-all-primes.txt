function sumPrimes(num) {
  let sum=0;
  for(let i=2;i<=num; i++){
    sum+=i;
    for(let j=2;j<=i/2;j++){
      if(i%j===0){
        sum-=i;
        break;
      }
    }
  }
  console.log(sum);
  return sum;
}

sumPrimes(977);
