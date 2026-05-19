const params = new URLSearchParams(window.location.search)
const userId = params.get('id')

const button = document.querySelector('.posts-btn');
const postsList = document.querySelector('.posts-list');
const userBlock = document.querySelector('.user');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        const { id, name, username, email, address, phone, website, company} = user;
        const {street, suite, city, zipcode} = address;
        const {lat, lng} = address.geo;
        const {name: companyName, catchPhrase, bs} = company;


        userBlock.innerHTML = `
            <p>Id: ${id} </p>
            <p>Name: ${name} </p>
            <p>Username: ${username}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Website: ${website}</p>
            <p>City: ${city}</p>
            <p>Street: ${street}, ${suite}</p>
            <p>Zip code: ${zipcode}</p>
            <p>Coords: ${lat}, ${lng}</p>
            <p>Company: ${companyName}</p>       
            <p>Catchphrase: ${catchPhrase}</p>   
            <p>BS: ${bs}</p>   
        `
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