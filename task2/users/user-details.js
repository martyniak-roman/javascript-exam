const params = new URLSearchParams(window.location.search)
const userId = params.get('id')

const button = document.querySelector('.posts-btn');
const postsList = document.querySelector('.posts-list');
const userBlock = document.querySelector('.user');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        const fields = {
            id: user.id,
            name: user.username,
            username: user.username,
            email: user.email,
            phone: user.phone,
            website: user.website,
            city: user.address.city,
            street: user.address.street,
            suite: user.address.suite,
            zipcode: user.address.zipcode,
            lat: user.address.geo.lat,
            lng: user.address.geo.lng,
            company: user.company.name,
        };

        for (const [key, value] of Object.entries(fields)) {
            const p = document.createElement('p');
            p.textContent = `${key}: ${value}`;
            userBlock.appendChild(p);
        }
    })
    .catch(error => console.log(error))

button.addEventListener('click', () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response => response.json())
            .then(posts => {
                    postsList.innerHTML = '';

                    posts.forEach(post => {
                            const postCard = document.createElement('div');
                            postCard.classList.add('post-card');

                            const postTitle = document.createElement('h3');
                            postTitle.textContent = post.title;

                            const postLink = document.createElement('a');
                            postLink.classList.add('post-link');
                            postLink.textContent = 'View Post Details';

                            postLink.href = `../posts/post-details.html?id=${post.id}`;
                            postLink.target = '_blank';

                            postCard.append(postTitle, postLink);
                            postsList.append(postCard);
                    });
            })
            .catch(error => console.log(error));
});