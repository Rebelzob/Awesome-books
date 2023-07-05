const form = document.getElementById('form');
const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');
const booksList = document.getElementById('books');

let books = [];
let id = 0;

class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

class UI {
  static loadBooks() {
    const storedBooks = JSON.parse(localStorage.getItem('books'));
    if (storedBooks) {
      books = storedBooks;
      books.forEach(book => UI.createBook(book));
    }
  }

  static createBook(book) {
    const newBook = document.createElement('tr');
    newBook.innerHTML = `
      <td>"${book.title}" by ${book.author}
      <button type="button" class="remove-btn" data-id="${book.id}">Remove</button>
      </td>
    `;
    booksList.appendChild(newBook);
  }

  static clearFields() {
    titleInput.value = '';
    authorInput.value = '';
  }

  static removeBook(id) {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      books.splice(index, 1);
      booksList.innerHTML = '';
      books.forEach(book => UI.createBook(book));
      addBook();
    }
  }
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;

  if (title.trim() === '' || author.trim() === '') {
    alert('Please enter a title and author');
    return;
  }

  const book = new Book(title, author, id++);
  books.push(book);
  UI.createBook(book);
  UI.clearFields();
  addBook();
});

function addBook() {
  localStorage.setItem('books', JSON.stringify(books));
}

document.addEventListener('DOMContentLoaded', UI.loadBooks);

booksList.addEventListener('click', function(e) {
  if (e.target.classList.contains('remove-btn')) {
    const id = parseInt(e.target.getAttribute('data-id'));
    UI.removeBook(id);
  }
});
