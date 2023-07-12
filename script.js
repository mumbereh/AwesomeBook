let books = JSON.parse(localStorage.getItem('books')) || [];
function addBook(title, author) {
  const book = { title, author };
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
}
function removeBook(title) {
  books = books.filter((book) => book.title !== title);
  localStorage.setItem('books', JSON.stringify(books));
}
function displayBooks() {
  const bookList = document.getElementById('book-lists');
  bookList.innerHTML = '';
  books.forEach((book) => {
    const listItem = document.createElement('li');
    listItem.style.listStyle = 'none';
    const rmvBtn = document.createElement('button');
    rmvBtn.textContent = 'Remove';
    rmvBtn.classList.add('remove-button');
    rmvBtn.dataset.title = book.title;
    const line = document.createElement('hr');
    listItem.innerHTML = `${book.title} <br> ${book.author}`;
    bookList.appendChild(listItem);
    bookList.appendChild(rmvBtn);
    bookList.appendChild(line);
  });
}
document.getElementById('button').addEventListener('click', () => {
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  addBook(titleInput.value, authorInput.value);
  displayBooks();
  titleInput.value = '';
  authorInput.value = '';
});
// Event delegation for the "Remove" button click.
document.getElementById('book-lists').addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-button')) {
    const { title } = event.target.dataset;
    removeBook(title);
    displayBooks();
  }
});
displayBooks();
