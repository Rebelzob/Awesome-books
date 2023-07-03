const form = document.getElementById('form');
const title = document.getElementById('title-input');
const author = document.getElementById('author-input');
const booksList = document.getElementById('books-list');
const addButton = document.getElementById('add-btn')
const removeButton = document.getElementById('remove-btn');


const books = [];
form.addEventListener('submit',function(e) {
  const book = {
    title :title.value,
    author : author.value
}
books.push(book);

  books.forEach((book)=>{
    let bookHtml='';
    bookHtml+=`<article id="listed-books">
    <ul>
        <li>${book.title}</li>
        <li>${book.author}</li>
        <li><button type="button" id="remove-btn">Remove</button></li>
    </ul>
</article>`
booksList.innerHTML=bookHtml;
  })
  e.preventDefault();
})

// console.log(books)
 
