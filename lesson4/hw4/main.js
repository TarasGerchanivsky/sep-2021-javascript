// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaRect (a, b) {
    return a * b;
}
console.log(areaRect (5, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaCircle(r) {
    return  3.14 * r * r;
}
console.log(areaCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaCylinder(h,r) {
    return 2 * 3.14 * r * (r + h);
}
console.log(areaCylinder(10, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент

function outputdata(arg) {
    for (const argElement of arg) {
        console.log(argElement);
    }
}
let array = [1,3,5,"ok"];
outputdata(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph(abb) {
document.write(`<p>${abb}</p>`);
}
paragraph('text-text-text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function listCreator(abc) {
    document.write(`<ul>`);
    document.write(`<li> ${abc} </li>`);
    document.write(`<li> ${abc} </li>`);
    document.write(`<li> ${abc} </li>`);
    document.write(`</ul>`);
}
listCreator("any text");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function listCreat(arg1,arg2){
    document.write(`<ul>`);
    for (let i = 0; i < arg2; i++) {
        document.write(`<li> ${arg1} </li>`);
    }
        document.write(`</ul>`);

}
listCreat("text",3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arrayMix(array2) {
    document.write(`<ul>`);
    for (const array2Element of array2) {
        document.write(`<li> ${array2Element} </li>`);
    }
    document.write(`</ul>`);
}
let arr = [2,4,5,"okten",true];
arrayMix(arr);
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function getArray(array3) {
    for (const user of array3) {
        document.write(`<div>${user.id}. ${user.name} - ${user.age} </div>`);
    }
}
let arrObj = [
    {id: 1, name: 'Vanya', age: 32 },
    {id: 2, name: 'Vasya', age: 23 },
    {id: 3, name: 'Kolya', age: 18 }
]
getArray(arrObj);