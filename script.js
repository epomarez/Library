const myLibrary = [];

function Book(title, author, summary, pageNumber, isRead) {
    this.title = title,
    this.author = author,
    this.summary = summary,
    this.pageNumber = pageNumber,
    this.isRead = isRead
}

function createBook(){
  const title = document.getElementById('title').value;
  console.log(title + "opa opa");
  const author = document.getElementById('author').value;
  const summary = document.getElementById('summary').value;
  const pagesNumber = document.getElementById('pageNumber').value;
  const isRead = document.getElementById('isRead').checked;

  return new Book(title, author, summary, pagesNumber, isRead);
}

function addBookToLibrary(event) {
  let newBook = createBook();
  myLibrary.push(createBook());
  addCard(newBook, (myLibrary.length-1));
  event.preventDefault();
  
}

const submitBtn = document.getElementById('submit_button');

submitBtn.addEventListener('click', addBookToLibrary);


let cardSection = document.querySelector('.cards');

function generateBookFields(book, id) {

  let title = document.createElement('p');
  title.innerText = `Title: ${book.title}`;

  let author = document.createElement('p');
  author.innerText = `Author: ${book.author}`;

  let summary = document.createElement('p');
  summary.innerText = `Summary: ${book.summary}`;

  let pagesNumber = document.createElement('p');
  pagesNumber.innerText = `Pages Number: ${book.pagesNumber}`;

  let isRead = document.createElement('p');
  isRead.innerText = `Is read: ${book.isRead}`;

  let deleteButton = document.createElement('button');
  deleteButton.addEventListener('click', ()=>{
    
  })

  return new Array(title, author, summary, pagesNumber, isRead);
}

function appendBookData(card, bookFields, id) {

  for (i = 0; i < bookFields.length; i++) {
    card.appendChild(bookFields[i]);
    card.setAttribute('id', `${id}`);
  }

  return card;
}

function addCard(book, id) {
  let newCard = document.createElement('div');
  newCard.style.cssText = 'background-color: #568259; height:225px; width:225px; padding:20px; display:flex; flex-direction:column; row-gap:10px;';
  cardSection.appendChild(appendBookData(newCard, generateBookFields(book, id), id));

}

// for (let i = 0; i < 7; i++) {
//   addCard(null);
// }