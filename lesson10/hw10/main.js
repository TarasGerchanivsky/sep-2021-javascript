// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let divText = document.createElement('div');
divText.classList.add('text');
divText.innerText = 'aasadfdd'
let button = document.createElement('button');
button.innerText = 'hide';
document.body.appendChild(divText);
document.body.appendChild(button);

button.onclick = function (){
    divText.style.display = 'none';
}

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let button2 = document.createElement('button');
button2.innerText = 'нажми і я зникну';
document.body.appendChild(button2);

button2.onclick = function () {
    button2.style.display = 'none';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

document.getElementById('button1').onclick = function () {
    let age = document.getElementById('age').value;
    if (+age < 18) {
        alert('тобі ще потрібно підрости');
    } else {
        alert('ласкаво просимо');
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике

let menu = document.getElementsByClassName('menu')[0];
menu.onclick = function () {
   menu.classList.toggle('hide');
}
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let coments = [
    {title: 'lorem1', body: 'lorem ipsum dolo  ameti'},
    {title: 'lorem2', body: 'lorem  dolo sit ameti'},
    {title: 'lorem3', body: ' ipsum dolo sit ameti'}
]

for (const coment of coments) {
let comentDiv = document.createElement('div');
let title = document.createElement('h3');
title.innerText = coment.title;
let body = document.createElement('div');
body.innerText = coment.body;
let btn = document.createElement('button');
btn.innerText = 'hide comment';
btn.onclick = function () {
    body.classList.toggle('hide-comment');
};

comentDiv.append(title, body, btn);
document.body.appendChild(comentDiv);

}
