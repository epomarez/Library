const myLibrary = [];

//Constructor for books
function Book(title, author, summary, pageNumber, isRead) {
  this.title = title,
    this.author = author,
    this.summary = summary,
    this.pageNumber = pageNumber,
    this.isRead = isRead
}

const submitBtn = document.getElementById('submit_button');

const cardSection = document.querySelector('.cards');

//Creates a single book
function createBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const summary = document.getElementById('summary').value;
  const pagesNumber = document.getElementById('pageNumber').value;

  const isRead = document.getElementById('isRead').checked;

  return new Book(title, author, summary, pagesNumber, isRead);
}

//Checkbox for change isRead value
function appendReadCheckBx(id, isRead) {
  const checkBx = document.createElement('input');
  checkBx.setAttribute('type', 'checkBox');

  //Set default status of checkbox.
  if (isRead) {
    checkBx.checked = true;
  } else {
    checkBx.checked = false;
  }

  //This would apply change to the object itself
  checkBx.addEventListener('change', () => {
    if (checkBx.checked) {
      myLibrary[id].isRead = true;
    } else {
      myLibrary[id].isRead = false;
    }
  });

  return checkBx;
}

//Functionality for deleting a single card

function deleteCard(card) {
  myLibrary.splice(card.id, 1);
  if (myLibrary[card.id]) {
    let nextCard = card.nextElementSibling;
    nextCard.id = card.id;
  }
  cardSection.removeChild(card);
}


function generateDeleteButton() {
  const deleteButton = document.createElement('button');
  deleteButton.style.cssText = ("width:120px; height:20px");
  deleteButton.innerText = "Delete book";
  deleteButton.addEventListener('click', () => {
    deleteCard(deleteButton.parentElement);
  })

  return deleteButton;
}


function generateBookFields(book, id) {

  const title = document.createElement('p');
  title.innerText = `Title: ${book.title}`;

  const author = document.createElement('p');
  author.innerText = `Author: ${book.author}`;

  const summary = document.createElement('p');
  summary.innerText = `Summary: ${book.summary}`;

  const pagesNumber = document.createElement('p');
  pagesNumber.innerText = `Pages Number: ${book.pageNumber}`;

  const isRead = document.createElement('div');
  isRead.innerText = `Is read: `;
  isRead.appendChild(appendReadCheckBx(id, book.isRead));

  const deleteBtn = generateDeleteButton();


  return new Array(title, author, summary, pagesNumber, isRead, deleteBtn);
}

function appendBookData(card, book, id) {

  //Appends the data to the card
  const bookFields = generateBookFields(book, id);
  for (i = 0; i < bookFields.length; i++) {
    card.appendChild(bookFields[i]);
  }
  card.setAttribute('id', `${id}`);
  return card;
}

//Generates the card
function addCard(book, id) {
  const newCard = document.createElement('div');
  newCard.style.cssText = 'background-color: #568259; height:225px; width:225px; padding:20px; display:flex; flex-direction:column; row-gap:10px;';
  cardSection.appendChild(appendBookData(newCard, book, id));
}

//Adds book to myLibrary array and its card to .cards.
function addBookToLibrary() {
  let newBook = createBook();
  myLibrary.push(newBook);
  addCard(newBook, (myLibrary.length - 1));

}

function validInputs() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const summary = document.getElementById('summary').value;
  const pagNum = document.getElementById('pageNumber').value;
  if ((title === "" || author === "" || summary === "" || (pagNum === "" || pagNum === 0))) {
    return false;
  } else {
    return true;
  }
}

submitBtn.addEventListener('click', (event) => {
  if (validInputs()) {
    addBookToLibrary();
    const formContainer = document.querySelector(".addBooks");
    if(document.getElementById("invalid")){
      formContainer.removeChild(document.getElementById("invalid"));
    }
  } else {
    if (document.getElementById("invalid")) {
      
    } else {
      const divAdvertence = document.createElement('div');
      divAdvertence.setAttribute("id", "invalid");
      divAdvertence.innerText = "Fields must not be empty";
      divAdvertence.style.cssText = "color: red";
      const formContainer = document.querySelector(".addBooks");
      formContainer.appendChild(divAdvertence);
    }
  }
  event.preventDefault();

});


