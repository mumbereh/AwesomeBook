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
