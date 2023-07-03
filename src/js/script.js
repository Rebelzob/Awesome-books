const form = document.getElementById('form');
const title = document.getElementById('title-input');
const author = document.getElementById('author-input');
const booksList = document.getElementById('books-list');
const addButton = document.getElementById('add-btn')
const removeButton = document.getElementById('remove-btn');


let books = [];



form.addEventListener('submit',function(e) {
  e.preventDefault();
  const book = {
    title :title.value,
    author : author.value,
   id: id++
  }
books.push(book);
createBook(book);
clearFields();
})

function createBook(book) {
  const newBook = document.createElement('article');
  newBook.innerHTML = 
  `<div id="listed-books">
      <ul>
          <li>${book.title}</li>
          <li>${book.author}</li>
          <li><button type="button" id="${book.id}">Remove</button></li>
      </ul>
  </div>`;
  booksList.appendChild(newBook);
  }
function Delete(){
  removeButton.addEventListener('click',(e)=>{
    books=books.filter((book=>id=e.target));
  }) 
}

Delete();
 

function clearFields(){
  const title = document.getElementById('title-input').value='';
  const author = document.getElementById('author-input').value='';
}





