function addBook() {
  const titleInput = document.getElementById('titleInput');
  const authorInput = document.getElementById('authorInput');
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  // Check if title or author is empty
  if (title === '' || author === '') {

    return; // Stop execution
  }
    const bookElement = document.createElement('div');

    const titleParagraph = document.createElement('p');
    titleParagraph.innerText = `Title: ${title}`;
    bookElement.appendChild(titleParagraph);

    const authorParagraph = document.createElement('p');
    authorParagraph.innerText = `Author: ${author}`;
    bookElement.appendChild(authorParagraph);

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', () => {
    bookElement.remove();


    removeBookFromLocalStorage(title, author);
  });

    // Add line break
    bookElement.appendChild(document.createElement('br')); 
    bookElement.appendChild(removeButton);
  
    document.getElementById('bookList').appendChild(bookElement);
  
    // Store author and title in local storage
    const book = {
      title,
      author,
    };
    const books = JSON.parse(localStorage.getItem('books')) || [];
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  
    // Clear input fields
    titleInput.value = '';
    authorInput.value = '';
  }
  
  // Remove book from local storage
  function removeBookFromLocalStorage(title, author) {
    let books = JSON.parse(localStorage.getItem('books')) || [];
    books = books.filter((book) => book.title !== title || book.author !== author);
    localStorage.setItem('books', JSON.stringify(books));
  }
  
  // Call the addBook function somewhere in your code if it is intended to be used
  addBook();