
const message = document.querySelector('#message')



function addMovie(event) {
    event.preventDefault()
    const inputField = document.querySelector('input').value;
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.addEventListener("click", crossOffMovie)
    movieTitle.textContent = inputField;
    movie.appendChild(movieTitle);
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector('ul').appendChild(movie)
}
function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = 'Movie Deleted!'
}
function crossOffMovie (event) {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked') === true) {
        message.textContent = 'movie watched'
    } else {
        message.textContent = 'movie added back'
}
}

const formFinder = document.querySelector('form')
const BtnListener = document.querySelector('button')
formFinder.addEventListener("submit", addMovie)
