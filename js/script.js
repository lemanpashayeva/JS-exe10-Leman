 //exe
 const amount = [125, 555, 44];
 function calcTip1(){
    
    let x = amount[0];
    if ( x>50 & x<300 ){
        return x*15/100
    } else if ( x>200 ){
        return x*20/100
    } else if ( x<50 ){
        return x
    };
 };

 const tips = [];
 tips.push(calcTip1());


 function calcTip2(){
    let x = amount[1];
    if ( x>50 & x<300 ){
        return x*15/100
    } else if ( x>200 ){
        return x*20/100
    } else if ( x<50 ){
        return x
    };
 };

 tips.push(calcTip2());


 function calcTip3(){
    let x = amount[2];
    if ( x>50 & x<300 ){
        return x*15/100
    } else if ( x>200 ){
        return x*20/100
    } else if ( x<50 ){
        return x
    };
 };

 tips.push(calcTip3());

 console.log(tips)