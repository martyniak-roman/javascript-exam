const params = new URLSearchParams(window.location.search)
const postId = params.get('id')

const postBlock = document.querySelector('.post-info')

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        const posts = {
            userId: post.userId,
            id: post.id,
            title: post.title,
            body: post.body,
        }
        for (const [key, value] of Object.entries(posts)) {
            const p = document.createElement('p');
            p.textContent = `${key}: ${value}`;
            postBlock.appendChild(p);
        }
    })
    .catch(error => console.log(error))