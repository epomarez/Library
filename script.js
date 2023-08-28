const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}


let cardSection = document.querySelector('.cards');
function addCard(card){
    cardSection.appendChild(card());
}

for(let i = 0; i<7; i++){
    addCard(() => {
        let newCard = document.createElement('div');
        newCard.style.cssText= 'background-color: #568259; height:200px; width:180px';
        return newCard});
}