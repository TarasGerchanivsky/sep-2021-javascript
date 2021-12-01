// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

let getTextIdContent = document.getElementById('content');
console.log(getTextIdContent.innerText);
// -- отримує текст з блоку з id "rules"

let getTextIdRules = document.getElementById('rules');
console.log(getTextIdRules.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший

let anyTextIdContent = getTextIdContent.innerText = 'any text';
console.log(anyTextIdContent);

// -- замініть текст параграфа з id 'rules' на будь-який інший

let anyTextIdRules = getTextIdRules.innerText = 'any text';
console.log(anyTextIdRules);

// -- змініть кожному елементу колір фону на червоний

let eachChildren = document.body.children;
for (const child of eachChildren) {
    child.style.background = 'red';
}

// -- змініть кожному елементу колір тексту на синій

let eachChildrenColor = document.body.children;
for (const child of eachChildrenColor) {
    child.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let classElement = document.getElementById('rules');
console.log(classElement.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let elements = document.getElementsByClassName('fc_rules');
for (const element of elements) {
    element.style.color = 'red';
}