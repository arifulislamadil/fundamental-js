const add = (num1, num2) => num1 * num2;
console.log(add(2, 4));

const multiply = (num1, num2, num3) => num1 * num2 * num3;
console.log(multiply(2, 3, 4));

const tenTimes = num => num * 10;
console.log(tenTimes(3));

const getName = () => "hello";
console.log(getName());


const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

console.log(doMath(4, 3));