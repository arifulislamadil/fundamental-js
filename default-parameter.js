function add(num1, num2 = 0) {


    //Opetion 1
    // num2 = num2 || 0;

    //Option 2
    // if (num2 == undefined) {
    //     num2 = 0;
    // }

    const total = num1 + num2;
    return total;
}

const result = add(15, 10);
console.log(result);

const numbers = [3, 4, 8, 9, 11];
const num2 = [33, 44, 55, 66]
console.log([...numbers, ...num2]);
