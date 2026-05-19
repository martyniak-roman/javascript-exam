const button = document.querySelector('.posts-btn');
const postsList = document.querySelector('.posts-list');

button.addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            postsList.innerHTML = '';

            posts.forEach(post => {
                const postCard = document.createElement('div')
                postCard.classList.add('post-card')

                const postTitle = document.createElement('h3')
                postTitle.textContent = post.title

                const postLink = document.createElement('a')
                postLink.classList.add('post-link')
                postLink.textContent = 'View Post Details'
                postLink.href = `../posts-details/post-details.html?id=${post.id}`
                postLink.target = '_blank'

                postCard.append(postTitle, postLink)
                postsList.append(postCard)
            })
        })
        .catch(error => console.log(error))
})