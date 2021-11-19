// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function numMin(a, b, c) {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c){
        console.log(b);
    }
    else {
        console.log(c);
    }
}
numMin(758, 12, 2);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function numMax(a,b,c){
    if (a > b && a > c){
        console.log(a);
    } else if (b > a && b > c){
        console.log(b);
    } else {
        console.log(c)
    }
}
numMax(344,54,7)
// - створити функцію яка повертає найбільше число з масиву

function numberMax(array) {
    let max = array[0];
    for (const number of array) {
        if (max < number) {
            max = number;
        }
    }
    return max;
}
console.log(numberMax([23,34,12,678]));

// - створити функцію яка повертає найменьше число з масиву
function numberMin(array) {
    let min = array[0];
    for (const number of array) {
        if (min > number){
            min = number;
        }
    }
    return min;
}
console.log(numberMin([54,76,100,456,43,66]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function sumNumber(array) {
    let sum = 0;
    for (const number of array) {
        sum = sum + number;
    }
    return sum;
}
console.log(sumNumber([1,2,10]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function serednieNumber(array) {
    let sum = 0;
    for (const number of array) {
        sum = sum + number;
    }
    return sum / array.length;
}
console.log(serednieNumber([1,2,9]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function numMaxMin(arg){
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
numMaxMin([43,32,45,65]);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


function rundNumber(array){
    let array2 = [];
    for (let i = 0; i < array; i++) {
        array2.push(Math.round(Math.random()*100));
    }
    return array2;
}
console.log(rundNumber(10))


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function rundNumbers(array,limit){
    let array2 = [];
    for (let i = 0; i < array; i++) {
        array2.push(Math.round(Math.random()*limit));
    }
    return array2;
}
console.log(rundNumbers(10, 1000))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function reverce(array) {
    let array2 = [];
    for (let i = array.length - 1; i >= 0; i--) {
        array2.push(array[i]);
    }
    return array2;
}
console.log(reverce([1,2,3,4,5,6,7]));