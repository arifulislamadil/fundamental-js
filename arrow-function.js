function add(num1, num2) {
    const result = num1 + num2;
    return result;
}
console.log(add(33, 55));

const add3 = function (num1, num2) {
    return num1 + num2;
}
console.log(add3(33, 44));

//Arrow function
const add4 = (num1, num2) => num1 + num2;
const sum4 = add4(33, 44)
console.log(sum4);