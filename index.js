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
  const div = document.querrySelector('books');
  const bookList = document.getElementById('book-lists');
  bookList.innerHTML = '';

  books.forEach((book) => {
    const listItem = document.createElement('li');

    listItem.textContent = `${book.title} <br> ${book.author}`;
    bookList.appendChild(listItem);
    div.appendChild(bookList);
  });
}