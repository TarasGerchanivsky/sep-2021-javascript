// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter';
let n2 = 'Ron Whisley';
let n3 = 'Hermione Granger';

function name(ni) {
    ni
        .replaceAll('..', ' ')
        .replaceAll('---', ' ')
        .replaceAll('__', ' ');
    return ni;
}

console.log(name(n1));
console.log(name(n2));
console.log(name(n3));

//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let rundNumber = (arg) => {
    let array = [];
    for (let i = 0; i < arg; i++) {
        array.push(Math.round(Math.random() * 100));
    }
    return array;
}
document.write(rundNumber(11));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let arraySort = rundNumber(50);
let sort = arraySort.sort((a, b) => a - b);
console.log(sort);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let arrayFilter = rundNumber(30);
let filter = arrayFilter.filter(value => value % 2 === 0);
console.log(filter);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arrayNumber = (size, num) => {
    let array1 = [];
    for (let i = 0; i < size; i++) {
        array1.push(Math.round(Math.random() * num));
    }
    return array1.map(value => value + '')
}
console.log(arrayNumber(20, 55));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let sortNums = (numbers, direction) => {
    if (direction === 'ascending') return numbers.sort((a, b) => a - b);
    else if (direction === 'descending') return numbers.sort((a,b) => b-a);
}
console.log(sortNums([34,54,35,4534],'ascending' ));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

let sortDown = coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration);
console.log(sortDown);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter5 = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter5);
