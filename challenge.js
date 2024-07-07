// first challenge 
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn)
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);


// second challenge
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log("mark's BMI is higher than john!")
// }
// else {
//     console.log("John's BMI is higher than marks's!")
// }



// third challenges
// const dolphine_score=(10 + 190 + 99) / 3
// const koalas_score=(190 + 18 + 89) / 3
// console.log(dolphine_score);
// console.log(koalas_score);

// if(dolphine_score > koalas_score && dolphine_score >= 100){
//     console.log('dolphine won the game');

// }else if (koalas_score > dolphine_score && koalas_score >= 100){
//     console.log('koalas won the game');

// }else if(koalas_score == dolphine_score && koalas_score >= 100 && dolphine_score >= 100){
//     console.log('both are won the game');
// }else{
//     console.log('no one won the game');
// }


// fourth challenge
// Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, 
// it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
//  Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. 
// It's not allowed to use an if/else statement (If it's easier for you, you can start with an if/ else statement, 
// and then try to convert it to a ternary operator!)
// Print a string to the console containing the bill value, the tip, and the final value (bill + tip). 
// Example: The bill was 275, the tip was 41.25, and the total value 316.25'
//  TEST DATA: Test for bill values 275, 40 and 430


// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 :
//      bill * 0.20;
// console.log(`The bill value ${bill}, the tip value ${tip}, and the total value ${bill + tip}`);


// javascript fundamentals in coding challenge in 2 for 1 challenge
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// 5. Ignore draws this time.

// TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// HINT: To calculate average of 3 values, add them all together and divide by 3
// HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

// GOOD LUCK 😀

// this is a arrow key function
// const calAverage = (a, b, c) => (a + b + c) / 3
// let dolphineScore = calAverage(44, 23, 71);
// let koalasScore = calAverage(65, 54, 49);

// // this is a inside function
// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log('No team wins');
//     }
// }
// checkWinner(dolphineScore, koalasScore);
// // test case 2
// dolphineScore = calAverage(85, 54, 41);
// koalasScore = calAverage(23, 34, 27);
// console.log(dolphineScore, koalasScore);
// checkWinner(dolphineScore, koalasScore);



// third  fundamental in coding callenge two

// const calcTip = function (bill){
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill *0.2;
// }
// const bill = [125, 555, 44];
// const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
// const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2], tips[2]];
// console.log(bill, tips, total)