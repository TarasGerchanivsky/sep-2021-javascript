// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка обчислює та повертає площу прямокутника висотою

let arearect = (a, b) => a * b;
console.log(arearect(5, 10));

// - створити функцію яка обчислює та повертає площу кола

let areaCircle = (r) => 3.14 * r * r;
console.log(areaCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру

let areaCylinder = (h, r) => 2 * 3.14 * r * (r + h);
console.log(areaCylinder(3, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [1,3,5,"ok"];
const outputData = (array) => {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
outputData(arr);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let paragraph = (abb) => {
    document.write(`<p> ${abb} </p>`);
}
paragraph('text - text - text');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let listCreator = (arg) => {
    document.write(`<ul>`);
    document.write(`<li> ${arg} </li>`);
    document.write(`<li> ${arg} </li>`);
    document.write(`<li> ${arg} </li>`);
    document.write(`</ul>`);
}
listCreator('any text');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let listCreat = (arg1, arg2) => {
    document.write(`<ul>`);
    for (let i = 0; i < arg2; i++) {
        document.write(`<li> ${arg1} </li>`);
    }
    document.write(`</ul>`);
}
listCreat('text', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrr = [2,4,5,"okten",true];
let arrayMix = (array) => {
    document.write(`<ul>`);
    for (const arrayElement of array) {
        document.write(`<li> ${arrayElement} </li>`);
    }
    document.write(`</ul>`);
}
arrayMix(arrr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arrObj = [
    {id: 1, name: 'Vanya', age: 32 },
    {id: 2, name: 'Vasya', age: 23 },
    {id: 3, name: 'Kolya', age: 18 }
];
let getArray = (array) => {
    for (const arrayElement of array) {
        document.write(`<div> ${arrayElement.id} ${arrayElement.name} - ${arrayElement.age} </div>`);
    }
}
getArray(arrObj);