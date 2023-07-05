const bookList = document.querySelector('.book-list_container');
const addBook = document.querySelector('.form_container');
const contact = document.querySelector('.contact');
const btnList = document.getElementById('btn-list');
const btnAdd = document.getElementById('btn-add');
const btnContact = document.getElementById('btn-contact');


btnList.addEventListener('click', () => {
    // e.preventDefault();
    bookList.style.display = 'flex';
});

