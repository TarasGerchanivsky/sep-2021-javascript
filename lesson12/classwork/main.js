1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let divWrap = document.createElement('div');
        for (const post of posts) {
            let divPost = document.createElement('div');
            divPost.classList.add('post');
            divPost.innerHTML = `
        <h3>id:${post.id}</h3>
        <h4>title:${post.title}</h4>
        <h5>body:${post.body}</h5>`;

            let btn = document.createElement('button');
            btn.innerText = 'show comments';

            btn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(response => response.json())
                    .then(comments => {
                        for (const comment of comments) {
                            let divComment = document.createElement('div');
                            divComment.classList.add('comment');
                            divComment.innerHTML = ` <ul><li>${comment.body}</li></ul>`;
                            divPost.appendChild(divComment);
                        }
                    })
            }
            divPost.appendChild(btn);
            divWrap.appendChild(divPost);
            document.body.appendChild(divWrap);
        }
    })