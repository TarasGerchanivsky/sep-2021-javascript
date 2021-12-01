// Взяти файл template_2.html та працювати по ньому
// 1) Напишіть код, який :
// a) додає клас, який впливає на колір тексту елемнту з ід main_header. Назва класу -  назва групи в якій ви вчитесь (sep-2021)

let elemColor = document.getElementById('main_header');
elemColor.classList.add('sep-2021');

// b) робить шириниу елементу ul 400px

let elementUlWidth = document.getElementsByTagName('ul');
for (const li of elementUlWidth) {
    li.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let elementLinkList = document.getElementsByClassName('linkList');
for (const element of elementLinkList) {
    element.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

let element = document.getElementsByClassName('listElement2');
for (const item of element) {
    console.log(item.innerText);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий

let listLi = document.getElementsByTagName('li');
for (const li of listLi) {
    li.style.background = 'silver';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let listA = document.getElementsByTagName('a');
for (const a of listA) {
    a.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let aList = document.getElementsByTagName('a');
for (const a of aList) {
    if (a.innerText === 'link3') {
        a.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let aGet = document.getElementsByTagName('a');
for (const a of aGet) {
    element_XXX = `element_${a.innerText}`;
    a.classList.add(element_XXX);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let subList = document.getElementsByClassName('sub-header');
for (const element of subList) {
    element.style.background = prompt('enter color');
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let sub_headerList = document.getElementsByClassName('sub-header');
for (const item of sub_headerList) {
    if (item.innerText === 'content 2 segment') {
        item.style.color = prompt('enter color');
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let elementContent_1 = document.getElementsByClassName('content_1');
for (const element of elementContent_1) {
    element.innerText = prompt('any text');
}

// l) отримати елементи p та змінити їм padding на 20px

let pElements = document.getElementsByTagName('p');
for (const p of pElements) {
    p.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let elementsText2 = document.getElementsByClassName('text2');
for (const element of elementsText2) {
    element.innerText = 'sep-2021';
}