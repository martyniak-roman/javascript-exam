const container = document.querySelector('.app')

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((users) => {
            for (const {id, name} of users) {
                const card = document.createElement('div')
                card.classList.add('user-card')
                const userElement = document.createElement('p')
                userElement.textContent = `${id} : ${name}`
                const link = document.createElement('a')
                link.href = `users/user-details.html?id=${id}`
                link.textContent = 'View More'
                link.target = '_blank'

                card.append( userElement, link)
                container.append(card)
            }
        })
        .catch(error => console.log(error))