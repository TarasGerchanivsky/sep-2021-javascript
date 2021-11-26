// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let strOne = 'hello world';
console.log(strOne.length);

let strTwo = 'lorem ipsum';
console.log(strTwo.length);

let strThree = 'javascript is cool';
console.log(strThree.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

const toUpperCase = strOne.toUpperCase();
console.log(toUpperCase);

const toUpperCase1 = strTwo.toUpperCase();
console.log(toUpperCase1);

const toUpperCase2 = strThree.toUpperCase();
console.log(toUpperCase2);
//
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let toLowerCase = toUpperCase.toLowerCase();
console.log(toLowerCase);

let toLowerCase1 = toUpperCase1.toLowerCase();
console.log(toLowerCase1);

let toLowerCase2 = toUpperCase2.toLowerCase();
console.log(toLowerCase2);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let strDirty = ' dirty string   ';
const trim = strDirty.trim();
console.log(trim);
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let str = 'Каждый охотник желает знать';
let stringToarray = (str) => str.split(' ');
let arr = stringToarray(str);
console.log(arr);
document.write(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let strx = 'Каждый охотник желает знать';
let delete_characters = (str, length) => {
    return str.substring(0 ,length);
}
console.log(delete_characters(strx, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str1 = "HTML JavaScript PHP";
let insert_dash = (str) => {
    return str.replaceAll(' ', '-').toUpperCase();
}
console.log(insert_dash(str1));
document.write(insert_dash(str1));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let str2 = 'asdasfdad';
let toUpperCaseFirst = (str) => str[0].toUpperCase() + str.slice(1);
console.log(toUpperCaseFirst(str2));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
    let array2 = [];
    let split = str.split(' ');
    for (const splitElement of split) {
      array2.push(splitElement[0].toUpperCase() + splitElement.slice(1))
    }
    return array2;
}
console.log(capitalize('okten hello world'));
