// eslint-disable-next-line max-classes-per-file
class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  // Using classes instead of objects for add book function.
  addBook(title, author) {
    // eslint-disable-next-line no-use-before-define
    const book = new Book(title, author);

    this.books.push(book);
    this.saveToLocalStorage();
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
    this.saveToLocalStorage();
  }

  displayBooks() {
    const bookList = document.getElementById('book-lists');
    bookList.innerHTML = '';

    this.books.forEach((book) => {
      const listItem = document.createElement('li');
      listItem.style.listStyle = 'none';

      const rmvBtn = document.createElement('button');
      rmvBtn.textContent = 'Remove';
      rmvBtn.classList.add('remove-button');
      rmvBtn.dataset.title = book.title;

      listItem.innerHTML = `"${book.title}" by ${book.author}`;

      bookList.appendChild(listItem);
      bookList.appendChild(rmvBtn);
    });
  }

  saveToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const bookCollection = new BookCollection();

document.getElementById('button').addEventListener('click', () => {
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');

  bookCollection.addBook(titleInput.value, authorInput.value);
  bookCollection.displayBooks();

  titleInput.value = '';
  authorInput.value = '';
});

// Event delegation for the "Remove" button click.
document.getElementById('book-lists').addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-button')) {
    const { title } = event.target.dataset;

    bookCollection.removeBook(title);
    bookCollection.displayBooks();
  }
});
bookCollection.displayBooks();
