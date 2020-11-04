function checkCashRegister(price, cash, cid) {
  var currency = ["PENNY","NICKEL","DIME","QUARTER","ONE","FIVE","TEN","TWENTY","ONE HUNDRED"];
  var amount =[0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  var diff = cash-price;
  var change=[];
  var closed = [...cid];
  for(let j=0;j<closed.length;j++){
    closed[j]=cid[j].slice();
  }//deep copying
  console.log(diff);
  let i=0;
  for(i;i<amount.length;i++){
    if(diff>=amount[i]){
      continue;
    }
    i--;
    break;
  }
  var temp;
    while(diff!=0 && i>=0){
      if(i>=0){
        if(cid[i][1]-diff>=0){
          temp=0;
          do{
            temp+=amount[i];
          }while(temp<diff);
          temp = Math.round(temp*100)/100;
          if(temp>diff) temp-=amount[i];
          if(temp!=0){
            cid[i][1]-=temp;
            change.push([currency[i], Math.round(temp*100)/100]);
            diff-=temp;
            diff = Math.round(diff*100)/100;
            //console.log(change, temp,cid[i][1],diff);
          }
        }else{
          if(cid[i][1]>0){
            temp = 0;
            do{
              temp+=amount[i];
            }while(temp<cid[i][1]);
            temp = Math.round(temp*100)/100;
            //console.log(temp);
            if(temp>cid[i][1]) temp-=amount[i];
            if(temp!=0){
              diff-=temp;
              diff = Math.round(diff*100)/100;
              change.push([currency[i], Math.round(temp*100)/100]);
              cid[i][1]-=temp;
              //console.log(change,temp,cid[i][1],diff)
            }
          }
        }
        i--;
      }
    }

  if(diff!=0){
        return {status: "INSUFFICIENT_FUNDS", change: []};
      }

  if(i<0){
        for(let index=0; index<change.length; index++)
          if(change[index][1]!=closed[index][1]){break;}
            else{
              return {status: "CLOSED", change: closed};
            }
        }
  
  
  console.log(change,closed);
  return {status: "OPEN", change: change};
  
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
