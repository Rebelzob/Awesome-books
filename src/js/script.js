const form = document.getElementById('form');
const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');
const booksList = document.getElementById('books');
const bookList = document.querySelector('.book-list_container');
const addBook_ = document.querySelector('.form_container');
const contact = document.querySelector('.contact');
const btnList = document.getElementById('btn-list');
const btnAdd = document.getElementById('btn-add');
const btnContact = document.getElementById('btn-contact');

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

// Navigation functionality

btnList.addEventListener('click',function(){
  bookList.classList.add('display')
  addBook_.classList.remove('display')
  contact.classList.remove('display')
})

btnAdd.addEventListener('click',function(){
  bookList.classList.remove('display')
  addBook_.classList.add('display')
  contact.classList.remove('display')
})

btnContact.addEventListener('click',function(){
  bookList.classList.remove('display')
  addBook_.classList.remove('display')
  contact.classList.add('display')
})


