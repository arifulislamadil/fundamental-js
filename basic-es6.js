//Variable var,let,const
var deposite = 500;

//Comparison ==,<,>,<=,>=,!=
if (deposite > 300 && deposite == 500) {
    console.log("you are right");
} else {
    console.log("you aren't right");
}

//Array push,pop,shift,unshift
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.push(33);
numbers.pop();
numbers.shift();
numbers.unshift(4444);
console.log(numbers);

//Array sum of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (const number of numbers) {
    sum = sum + number;
}
console.log(sum);

//Geater then
const numbers = [1, 2, 3, 11, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (const number of numbers) {
    if (number > sum) {
        sum = number
    }
}
console.log(sum);
//exist in the array
const numbers = [1, 2, 3, 11, 4, 5, 6, 7, 8, 9];
if (numbers.indexOf(333) !== -1) {
    console.log("This number is include");
} else {
    console.log("number doesn't include");
}
//Include
const numbers = [1, 2, 3, 11, 4, 5, 6, 7, 8, 9];
if (numbers.includes(333)) {
    console.log("This number is include");
} else {
    console.log("number doesn't include");
}

//Function
function fullName(firstName, secondName) {
    const result = firstName + " " + secondName;
    return result;
}
const firstName = "Rohim";
const secondName = "Khan";
const fullname = fullName(firstName, secondName);
console.log(fullname);

//Object
const bottle = { color: "blue", price: 33 }
console.log(bottle);