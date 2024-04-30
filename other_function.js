// function cutPieces(fruit) {
//     return fruit * 5;
// }
// function fruitProcess(kiwi, mango) {
//     const kiwiPices = cutPieces(kiwi);
//     const mangoPices = cutPieces(mango);
//     const juice = `kiwi fruit pices of ${kiwiPices} kiwipices and mango fruit pices of ${mangoPices} mangopices`;
//     return juice;
// }
// console.log(fruitProcess(10, 20));








function bmi_calc( user_weight,user_height){
    const user_bmi = bmi_output(user_weight,user_height)
     
    if (user_bmi <=18.0){
        return "your bmi is " + user_bmi + " you are in under weight😒😒😢 "
    }else if(user_bmi <=25.0){
        return "your bmi is " + user_bmi + " you are in healthy weight🥳👌 "
    }else if(user_bmi <=35.0){
        return "your bmi is " + user_bmi + " you are in over weight😧😨 "

    }else if (user_bmi >=35.0){
        return "your bmi is " + user_bmi + " you are in obesity weight😱 "

    }
}
console.log(bmi_calc(51,1.72));
function bmi_output  (weight,height){
    return weight / height ** 2
}