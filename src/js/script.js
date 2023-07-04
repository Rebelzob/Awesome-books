const form = document.getElementById('form');
const title = document.getElementById('title-input');
const author = document.getElementById('author-input');
const booksList = document.getElementById('books');


let books = [];
let id=0;


form.addEventListener('submit',function(e) {
  e.preventDefault();
  let book = {
    title :title.value,
    author : author.value,
   id: id++
  }
books.push(book);
createBook(book);
clearFields();
})


function createBook(book) {
  const newBook = document.createElement('li');
  newBook.innerHTML = 
  `<div>${book.title}</div>
      <div>${book.author}</div>
      <button type="button" class="remove-btn" data-id="${book.id}">Remove</button>
        <hr>`
  booksList.appendChild(newBook);
  }

function clearFields(){
  const title = document.getElementById('title-input').value='';
  const author = document.getElementById('author-input').value='';
}

function Delete(){
  booksList.addEventListener('click',function(e){
    if(e.target.classList.contains('remove-btn')){
      const id = parseInt(e.target.getAttribute('data-id'));
      removeBook(id);
      updateBooks();
    }
  })
  
  function removeBook(id){
    const index=books.findIndex(book=>book.id === id)
    if(index !== -1){
      books.splice(index, 1);
    }
  }

  function updateBooks() {
      while (booksList.firstChild) {
        booksList.firstChild.remove();
      }
      books.forEach(book => createBook(book));
    }
}

Delete();








