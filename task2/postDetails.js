const params = new URLSearchParams(window.location.search)
const postId = params.get('id')


fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        const { id, userId, title, body } = post

        const postBlock = document.querySelector('.post-info')
        postBlock.innerHTML = `
            <p>Id: ${id}</p>
            <p>UserId: ${userId}</p>
            <p>Title: ${title}</p>
            <p>Body: ${body}</p>
        `

        const commentsList = document.querySelector('.comments-list')

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
    })
    .catch(error => console.log(error))