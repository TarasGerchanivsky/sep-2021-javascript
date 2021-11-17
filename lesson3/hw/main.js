// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let number = [55, 35, 25, 15, 5];
let str = ['one', 'dog', 'two', 'okten', 'year'];
let dif = ['one', false, 'two', true, 99];
console.log(number);
console.log(str);
console.log(dif);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let array = [];
array[0] = 'one';
array[1] = false;
array[2] = 'two';
array[3] = true;
array[4] = 99;
console.log(array);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

for (let i = 0; i < 10; i++) {
    document.write('<div>item </div>');
}
for (let i = 0; i < 10; i++) {
    document.write(`<div>item ${i}</div>`);
}
// let i = 0;
// while (i < 20) {
//     document.write('<h1>item</h1>');
//     i++;
// }
let i = 0;
while (i < 20){
    document.write(`<h1>item ${i}</h1>`);
    i++;
}

// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let num = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let string = ['world', 'millennium', 'century', 'decades','year', 'month', 'week', 'day', 'hour', 'second'];
for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let all = [true, 10, '10', false, 'name', 'okten', 32, {}, 'world', 99];
for (let i = 0; i < all.length; i++ ) {
    console.log(all[i]);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let all1 = [true, 10, '10', false, 'name', 'okten', 32, 0, 'world' ,99];
for (let i = 0; i < all1.length; i++) {
    if (typeof all1[i] === 'boolean'){
        console.log(all1[i]);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let all2 = [true, 10, '10', false, 'name', 'okten', 32, 0, 'world' ,99];
for (let i = 0; i < all2.length; i++) {
    if (typeof all2[i] === 'number'){
        console.log(all2[i]);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let all3 = [true, 10, '10', false, 'name', 'okten', 32, 0, 'world' ,99];
for (let i = 0; i < all3.length; i++) {
    if (typeof all3[i] === 'string'){
        console.log(all3[i]);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let array2 = [];
array2[0] = true;
array2[1] = 10;
array2[2] = '10';
array2[3] = 'name';
array2[4] = 'okten';
array2[5] = 32;
array2[6] = {};
array2[7] = false;
array2[8] = 'world';
array2[9] = [];
for (let i = 0; i < array2.length; i++){
    console.log(array2[i]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++){
    console.log(`${i}`);
    document.write(`${i}`);
}
// Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log(`${i}`);
    document.write(`${i}`);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i+=2) {
    console.log(`${i}`);
    document.write(`${i}`);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++){
    if (i % 2 === 0){
        console.log(`${i}`);
        document.write(`${i}`);
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++){
    if (i % 2 !== 0){
        console.log(`${i}`);
        document.write(`${i}`);
    }
}