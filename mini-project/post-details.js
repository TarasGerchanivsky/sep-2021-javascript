// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let postInfo = JSON.parse(localStorage.getItem('postDetail'));

let wrapper = document.createElement('div');
document.body.appendChild(wrapper);

for (const postDetails of postInfo) {
    let postDetail = document.createElement('div');
    postDetail.classList.add('postDetail');
    postDetail.innerHTML = `
<h4>id:${postDetails.id}</h4>
<h4>title:${postDetails.title}</h4>
<h4>body:${postDetails.body}</h4>
`;
    let commentsBox = document.createElement('div');
    commentsBox.classList.add('commentsBox');
    wrapper.append(postDetail, commentsBox);


    fetch(`https://jsonplaceholder.typicode.com/posts/${postDetails.id}/comments`)
        .then(response => response.json())
        .then(comments => {
            for (const comment of comments) {
                let commentDetail = document.createElement('div');
                commentDetail.classList.add('commentDetail');
                commentDetail.innerHTML = `
<h5>id:${comment.id}</h5>
<h5>name:${comment.name}</h5>
<h5>email:${comment.email}</h5>
<h5>body:${comment.body}</h5>
`;
                commentsBox.appendChild(commentDetail);
            }
        })
}