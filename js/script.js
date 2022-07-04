 //exe

 function calcTip(){
    const amount = [125, 555, 44 ];
    let x = amount[0]
    if ( x>50 & x<300 ){
        return x*15/100
    } else if ( x>200 ){
        return x*20/100
    };
 };

 
 console.log(calcTip());