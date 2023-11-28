// month="may"
// switch (month) {
//     case "january":
//         console.log('sham is incharge the', month);
//         break
//     case "february":
//         console.log('servin is incharge the', month);
//         break
//     case "march":
//         console.log('gokul is incharge the', month);
//         break
//     case "april":
//         console.log('shiva kumar is incharge the', month);
//         break
//     case "may":
//         console.log('maaz is incharge the', month);
//         break
//     case "june":
//         console.log('arun is incharge the', month);
//         break
//     case "july":
//         console.log('ram is incharge the', month);
//         break
//     case "august":
//         console.log('mani is incharge the', month);
//         break
//     case "september":
//         console.log('raghul is incharge the', month);
//         break
//     case "october":
//         console.log('sakthi is incharge the', month);
//         break
//     case "november":
//         console.log('surya is incharge the', month);
//         break
//     case "december":
//         console.log(' is incharge the', month);
//         break
// }



const operator = prompt('Enter operator( either +, -, * or / ): ');  
const number1 = parseFloat(prompt ('Enter the first number: '));  
const number2 = parseFloat(prompt ('Enter the second number: '));  
let result;
if (operator == '+') { 
    result = number1 + number2;  
}  
else if (operator == '-') { 
    result = number1 - number2;  
}  
else if (operator == '*') { 
    result = number1 * number2;  
}  
else {  
    result = number1 / number2; 
}  
window.alert(" Result is" + result);  