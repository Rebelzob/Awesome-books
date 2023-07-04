const form = document.getElementById('form');
const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');
const booksList = document.getElementById('books');


let books = [];
let id = 0;

// Creating the book and getting user input
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  
  if (title.trim() === '' || author.trim() === '') {
    alert('Please enter a title and author');
    return;
  }
  
  const book = {
    title: title,
    author: author,
    id: id++
  };
  
  books.push(book);
  createBook(book);
  clearFields();
  addBook();
});

//  Generating Book Html

function createBook(book) {
  const newBook = document.createElement('li');
  newBook.innerHTML = `
    <div>${book.title}</div>
    <div>${book.author}</div>
    <button type="button" class="remove-btn" data-id="${book.id}">Remove</button>
    <hr>
  `;
  booksList.appendChild(newBook);
}

function clearFields() {
  titleInput.value = '';
  authorInput.value = '';
}

function removeBook(id) {
  const index = books.findIndex(book => book.id === id);
  if (index !== -1) {
    books.splice(index, 1);
  }
}

function updateBooks() {
  while (booksList.firstChild) {
    booksList.firstChild.remove();
  }
  books.forEach(book => createBook(book));
}

// storing the books

function addBook() {
  localStorage.setItem('Books', JSON.stringify(books));
}
 
// Loading the books

function loadBooks() {
  const storedBooks = JSON.parse(localStorage.getItem('Books'));
  if (storedBooks) {
    books = storedBooks;
    updateBooks();
  }
}


booksList.addEventListener('click', function(e) {
  if (e.target.classList.contains('remove-btn')) {
    const id = parseInt(e.target.getAttribute('data-id'));
    removeBook(id);
    updateBooks();
    addBook();
  }
});

loadBooks();








