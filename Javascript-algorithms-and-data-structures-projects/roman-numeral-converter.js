function convertToRoman(num) {
    console.log(num);
    let roman ="";
    let decimalNumeral =[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNumeral =[ 
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
  ];
  for(let index=0; index<decimalNumeral.length; index++){
      while(num>=decimalNumeral[index]){
          num-=decimalNumeral[index];
          roman+=romanNumeral[index];
      }
  }
 console.log(roman);
 return roman;
}

convertToRoman(798);
