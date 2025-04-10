let num1 = prompt("Number One:", "0");
let num2 = prompt("Number Two:", "0");
console.log("type of variables: " + typeof num1);
//converting them to numbers
console.log("converting it into numbers........");
num1 = Number(num1);
num2 = Number(num2);
console.log("type of variable " + typeof num1);

//now time for the calculations
const add = num1 + num2;
const sub = num1 - num2;
const mul = num1 * num2;
const div = num1 / num2;
const mod = num1 % num2;


console.log(num1 + " + " + num2 + " = " + add);
console.log(num1 + " - " + num2 + " = " + sub);
console.log(num1 + " * " + num2 + " = " + mul);
console.log(num1 + " / " + num2 + " = " + div);
console.log(num1 + " % " + num2 + " = " + mod);

