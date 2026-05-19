const commentParams = new URLSearchParams(window.location.search);
const currentPostId = commentParams.get('id');

const commentsList = document.querySelector('.comments-list')

if (currentPostId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => {
            commentsList.innerHTML = '';
            comments.forEach(comment => {
                const {name, email, body } = comment

                const card = document.createElement('div')
                card.classList.add('comment-card')

                card.innerHTML = `
                            <h3>${name}</h3>
                            <p class="comment-email">${email}</p>
                            <p class="comment-body">${body}</p>
                        `

                commentsList.append(card)
            })
        })
        .catch(error => console.log(error))
}
