// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу
//  user-details.html, которая имеет детальную информацию про объект на который кликнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let divWrap = document.createElement('div');
        divWrap.classList.add('wrapper');
        for (const user of users) {
            let divUser = document.createElement('div');
            divUser.classList.add('user');
            divUser.innerHTML = `
        <h3>id:${user.id}</h3>
        <h4>name:${user.name}</h4>`;

            let userDetails = document.createElement('a');
            userDetails.classList.add('userInfoButton');
            userDetails.innerText = 'user details';
            userDetails.href = "user-details.html";

            let userInfo = document.createElement('div');
            userInfo.innerText = JSON.stringify(user);
            userDetails.onclick = function () {
                let userDetail = JSON.parse(localStorage.getItem('userDetail')) || [];
                userDetail.push(user);
                localStorage.setItem('userDetail', JSON.stringify(userDetail));
            };

            divUser.appendChild(userDetails);
            divWrap.appendChild(divUser);
            document.body.appendChild(divWrap);

        }
    })