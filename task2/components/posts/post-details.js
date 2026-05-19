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
    })
    .catch(error => console.log(error))