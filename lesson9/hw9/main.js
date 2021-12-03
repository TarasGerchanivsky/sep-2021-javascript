// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta

let div = document.createElement('div');
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

div.style.background = 'silver';
div.style.color = 'red';
div.style.fontSize = '25px';

// - додати цей блок в body.

document.body.appendChild(div);

// - клонувати його повністю, та додати клон в body.

let div2 = div.cloneNode(true);
document.body.appendChild(div2)

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let ulContainer = document.getElementsByClassName("menu")[0];
let arr = ['Main','Products','About us','Contacts'];
for (const element of arr) {
    let liElement = document.createElement('li');
    liElement.innerText =  element;
    ulContainer.appendChild(liElement);
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const course of coursesAndDurationArray) {
    let divElement = document.createElement('div');
    divElement.innerText = `${course.title} - ${course.monthDuration}`;
    document.body.appendChild(divElement);
}

// - Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const course of coursesAndDurationArray2) {
    let divElement = document.createElement('div');
    divElement.classList.add('item');

    let h1Element = document.createElement('h1');
    h1Element.classList.add('heading');
    h1Element.innerText = course.title;

    let pElement = document.createElement('p');
    pElement.classList.add('description');
    pElement.innerText = course.monthDuration;

    divElement.appendChild(h1Element);
    divElement.appendChild(pElement);
    document.body.appendChild(divElement);


}



