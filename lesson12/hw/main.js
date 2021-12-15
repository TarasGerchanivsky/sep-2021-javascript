1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//         let divWrap = document.createElement('div');
//         divWrap.classList.add('wrap');
//         for (const post of posts) {
//             let divPost = document.createElement('div');
//             divPost.classList.add('post');
//             divPost.innerHTML = `
//                 <h2>userId: ${post.userId}</h2>
//                 <h3>id: ${post.id}</h3>
//                 <h4>title: ${post.title}</h4>
//                 <p>body: ${post.body}</p>
//                 `;
//             divWrap.appendChild(divPost);
//             document.body.appendChild(divWrap);
//         }
//     })


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
.then(responce => responce.json())
.then(comments => {
    let divWrap = document.createElement('div');
    divWrap.classList.add('wrap');
    for (const comment of comments) {
        let divComment = document.createElement('div');
        divComment.classList.add('comment');
        divComment.innerHTML = `
         <h2>postId:${comment.postId}</h2>
         <h3>id:${comment.id}</h3>
         <h4>name:${comment.name}</h4>
         <h5>email:${comment.email}</h5>
         <p>body: ${comment.body}</p>
        `;
        divWrap.appendChild(divComment);
        document.body.appendChild(divWrap);
    }
})