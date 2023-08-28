const myLibrary = [];

function Book(title, author, summary, pageNumber, isRead) {
  title,
    author,
    summary,
    pageNumber,
    isRead
}

function addBookToLibrary() {
  // do stuff here
}

const submitBtn = document.getElementById('submit_btn');



let cardSection = document.querySelector('.cards');

function generateBookFields() {
  let title = document.createElement('p');
  title.innerText = "Title: ";

  let author = document.createElement('p');
  author.innerText = "Author: ";

  let summary = document.createElement('p');
  summary.innerText = "Summary: ";

  let pagesNumber = document.createElement('p');
  pagesNumber.innerText = "Pages Number: ";

  let isRead = document.createElement('p');
  isRead.innerText = "Is read: ";

  return new Array(title, author, summary, pagesNumber, isRead);
}

function appendBookData(card, bookFields) {

  for (i = 0; i < bookFields.length; i++) {
    card.appendChild(bookFields[i]);
  }

  return card;
}

function addCard(card) {
  cardSection.appendChild(appendBookData(card(), generateBookFields()));
}

for (let i = 0; i < 7; i++) {
  addCard(() => {
    console.log("Hola");
    let newCard = document.createElement('div');
    newCard.style.cssText = 'background-color: #568259; height:200px; width:180px; padding:20px; display:flex; flex-direction:column; row-gap:10px;';
    return newCard
  });
}