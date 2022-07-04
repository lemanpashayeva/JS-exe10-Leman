 //exe
 const amount = [125, 555, 44];
 function calcTip(x){
    if ( x>50 && x<300 ){
        return x*15/100
    } else if ( x>200 ){
        return x*20/100
    } else if ( x<50 ){
        return x
    };
 };

 const tips = [];
 tips.push(calcTip(amount[0]));
 tips.push(calcTip(amount[1]));
 tips.push(calcTip(amount[2]));

 console.log(tips)