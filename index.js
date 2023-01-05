console.log('hello world');



const addMovie = (event) => {
    event.preventDefault();
    let inputField = document.querySelector('input');
    
    const movie = document.createElement('li');
    
    const movieTitle = document.createElement("span");
    movieTitle.addEventListener('click', crossOffMovie);
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);

    const list = document.querySelector('ul');
    list.appendChild(movie);
    
    inputField.value = "";
};


document.querySelector("form").addEventListener("submit", addMovie);
const message = document.querySelector('#message');

const deleteMovie = (event) => {
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`;
    
    revealMessage();

    event.target.parentNode.remove();

    setTimeout(() => {  // Add a delay before resetting the textContent property
        message.textContent = "";
    }, 2000);
};

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked');

    if(event.target.classList.contains('checked') === true) {
        message.textContent = `${event.target.textContent} watched!`;
    } else {
        message.textContent = `${event.target.textContent} added back!`;
    }

    revealMessage();

    setTimeout(() => {  // Add a delay before resetting the textContent property
        message.textContent = "";
    }, 2000);
};


const revealMessage = () => {

    setTimeout(() => {
    }, 5200)
}