
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

let userDetail = JSON.parse(localStorage.getItem('userDetail'));

for (const user of userDetail) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    document.body.appendChild(wrapper);

    for (const key in user) {
        if (typeof user[key] !== 'object') {
            let userKeyBox1 = document.createElement('div');
            userKeyBox1.classList.add('userKeyBox1');
            userKeyBox1.innerText = `${key + ':' + user[key]}`;
            wrapper.appendChild(userKeyBox1);
        } else {
            let userKeyWithObj = document.createElement('div');
            userKeyWithObj.innerHTML = `<div>${key + ':'}</div>`;
            userKeyWithObj.classList.add('userKeyWithObj');
            wrapper.appendChild(userKeyWithObj);

            for (const key2 in user[key]) {
                if (typeof user[key][key2] !== 'object') {
                    let userKeyBox2 = document.createElement('div');
                    userKeyBox2.classList.add('userKeyBox2');
                    userKeyBox2.innerText = `${key2 + ':' + user[key][key2]}`;
                    userKeyWithObj.append(userKeyBox2);
                } else {
                    let userKeyWithObj2 = document.createElement('div');
                    userKeyWithObj2.classList.add('userKeyWithObj2');
                    userKeyWithObj2.innerHTML = `<div>${key2 + ':'}</div>`;
                    userKeyWithObj.appendChild(userKeyWithObj2);

                    for (const key3 in user[key][key2]) {
                        if (typeof user[key][key2][key3] !== 'object') {
                            let userKeyBox3 = document.createElement('div');
                            userKeyBox3.classList.add('userKeyBox3');
                            userKeyBox3.innerText = `${key3 + ':' + user[key][key2][key3]}`;
                            userKeyWithObj2.append(userKeyBox3);

                        }
                    }
                }
            }
        }
    }
    let btn = document.createElement('button');
    btn.classList.add('btnPost');
    btn.innerText = 'post of current user';
    wrapper.appendChild(btn);

    let titleBoxes = document.createElement('div');
    titleBoxes.classList.add('titleBoxes');
    document.body.appendChild(titleBoxes);


    btn.onclick = function () {
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
            .then(response => response.json())
            .then(posts => {
                for (const post of posts) {

                    let titleBox = document.createElement('div');
                    titleBox.classList.add('titleBox');
                    titleBoxes.appendChild(titleBox);

                    let postTitle = document.createElement('div');
                    postTitle.classList.add('postTitle');
                    postTitle.innerHTML = `<h4>${post.title}</h4>`;
                    titleBox.appendChild(postTitle);
                    let postbtn = document.createElement('a');
                    postbtn.classList.add('postInfo');
                    postbtn.innerText = 'post-details';
                    postbtn.href = "post-details.html";
                    titleBox.appendChild(postbtn);

                    let postInfo = document.createElement('div');
                    postInfo.innerText = JSON.stringify(post);
                    postbtn.onclick = function () {
                        let postDetail = JSON.parse(localStorage.getItem('postDetail')) || [];
                        postDetail.push(post);
                        localStorage.setItem('postDetail', JSON.stringify(postDetail));
                    };
                }
            })
        btn.disabled = true;
    }
}

