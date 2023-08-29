const myLibrary = [];

function Book(title, author, summary, pageNumber, isRead) {
  this.title = title,
    this.author = author,
    this.summary = summary,
    this.pageNumber = pageNumber,
    this.isRead = isRead
}

const submitBtn = document.getElementById('submit_button');

let cardSection = document.querySelector('.cards');

function createBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const summary = document.getElementById('summary').value;
  const pagesNumber = document.getElementById('pageNumber').value;
  const isRead = document.getElementById('isRead').checked;

  return new Book(title, author, summary, pagesNumber, isRead);
}

function addBookToLibrary(event) {
  let newBook = createBook();
  myLibrary.push(createBook());
  addCard(newBook, (myLibrary.length - 1));
  event.preventDefault();

}

function generateBookFields(book, id) {

  let title = document.createElement('p');
  title.innerText = `Title: ${book.title}`;

  let author = document.createElement('p');
  author.innerText = `Author: ${book.author}`;

  let summary = document.createElement('p');
  summary.innerText = `Summary: ${book.summary}`;

  let pagesNumber = document.createElement('p');
  pagesNumber.innerText = `Pages Number: ${book.pagesNumber}`;

  let isRead = document.createElement('div');
  isRead.innerText = `Is read: `;
  isRead.appendChild(appendReadCheckBx(id, book.isRead));


  return new Array(title, author, summary, pagesNumber, isRead);
}

function appendReadCheckBx(id, isRead) {
  const checkBx = document.createElement('input');
  checkBx.setAttribute('type', 'checkBox');

  if (isRead) {
    checkBx.checked = true;
  } else {
    checkBx.checked = false;
  }

  checkBx.addEventListener('change', () => {
    if (checkBx.checked) {
      myLibrary[id].isRead = true;
      console.log('checked');
    } else {
      myLibrary[id].isRead = false;
      console.log('unchecked');
    }
  });

  return checkBx;
}

function appendBookData(card, bookFields, id) {

  for (i = 0; i < bookFields.length; i++) {
    card.appendChild(bookFields[i]);
  }
  card.setAttribute('id', `${id}`);
  appendDeleteButton(card);
  return card;
}

function addCard(book, id) {
  let newCard = document.createElement('div');
  newCard.style.cssText = 'background-color: #568259; height:225px; width:225px; padding:20px; display:flex; flex-direction:column; row-gap:10px;';
  cardSection.appendChild(appendBookData(newCard, generateBookFields(book, id), id));

}

function appendDeleteButton(card) {
  let deleteButton = document.createElement('button');
  deleteButton.style.cssText = ("width:120px; height:20px");
  deleteButton.innerText = "Delete book";
  deleteButton.addEventListener('click', () => {
    deleteCard(card);
  })
  card.appendChild(deleteButton);
}



function deleteCard(card) {
  myLibrary.splice(card.id, 1);
  if (myLibrary[card.id]) {
    let nextCard = card.nextElementSibling;
    nextCard.id = card.id;
  }
  cardSection.removeChild(card);
}


submitBtn.addEventListener('click', addBookToLibrary);