// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let numMin = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c){
        console.log(b);
    }
    else {
        console.log(c);
    }
}
numMin(200, 150, 300);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let numMax = (a, b, c) => {
    if (a > b && a > c){
        console.log(a);
    } else if (b > a && b > c){
        console.log(b);
    } else {
        console.log(c);
    }
}
numMax(234, 435, 23);

// - створити функцію яка повертає найбільше число з масиву
let arr = [34,425,453,23,678];
let numberMax = (array) => {
    let max = array[0];
    for (const number of array) {
        if (max < number) {
            max = number;
        }
    }
    return max;
}
console.log(numberMax(arr));

// - створити функцію яка повертає найменьше число з масиву

let arrr = [664,95,654,58];
let numberMin = (array) => {
    let min = array[0];
    for (const number of array) {
        if (min > number){
            min = number;
        }
    }
    return min;
}
console.log(numberMin(arrr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumArray = [2,45,558];
let sumNumber = (array) => {
    let sum = 0;
    for (const number of array) {
        sum = sum + number;
    }
    return sum;
}
console.log(sumNumber(sumArray));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let serednie = [65,25,548,5];
let serednieNumber = (array) => {
    let sum = 0;
    for (const number of array) {
        sum += number;
    }
    return sum / array.length;
}
console.log(serednieNumber(serednie));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let numMaxMin = (...arg) => {
    let min = arg[0];
    let max = arg[0];
    for (const argElement of arg) {
        if (min > argElement){
            min = argElement;
        }
        if (max < argElement){
            max = argElement;
        }
    }
    console.log(max)
    return min
}
document.write(numMaxMin(12,484,8,955,959,99));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let rundNumber = (arg) => {
    let array2 = [];
    for (let i = 0; i < arg; i++) {
        array2.push(Math.round(Math.random()*100));
    }
    return array2;
}
document.write(rundNumber(11));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let rundNumbers = (arg, limit) => {
    let array2 = [];
    for (let i = 0; i < arg; i++) {
        array2.push(Math.round(Math.random()*limit));
    }
    return array2;
}
document.write(rundNumbers(50,1000));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let array = [45,45,454,44,98,26];
let reverse = (arr) => {
    let array2 = [];
    for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
        array2[j] = arr[i];
    }
    return array2;
}
console.log(reverse(array));