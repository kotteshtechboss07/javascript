// const prompt=require("prompt-sync")({sigint:true}); 
 
// let name = prompt("What's your name");
// console.log("hello"+name+"!");
// const operator = prompt('Enter operator( either +, -, * or / ): ');  
// const number1 = parseFloat(prompt ('Enter the first number: '));  
// const number2 = parseFloat(prompt ('Enter the second number: '));  
// let result;
// if (operator == '+') { 
//     result = number1 + number2;  
// }  
// else if (operator == '-') { 
//     result = number1 - number2;  
// }  
// else if (operator == '*') { 
//     result = number1 * number2;  
// }  
// else {  
//     result = number1 / number2; 
// }  
// window.alert(" Result is" + result);  


function runProgram(input){
    let line=input.split('\n')
    let n= Number(line[0]);
    let arr = line[1].split(' ').map(x => +x);
    yourFunc(n,arr);
}

function yourFunc(n,arr){
    console.log({n,arr})
}

if(process.env.USER === ""){
    runProgram('')
}
else{
    process.stdin.resume();
    process.stdin.setEncoding('ascii');
    let read="";
    process.stdin.on('data',function(inp){
        read+=inp
    })
    process.stdin.on('end',function(inp){
        read=read.replace(/\n$/,"");
        read=read.replace(/\n$/,"");
        runProgram(read);
    });
    process.on("SIGINT",function(){
        read=read.replace(/\n$/,"");
        runProgram(read);
        process.exit(0);
    })
}