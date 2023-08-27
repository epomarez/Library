const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}



// let card = document.createElement('div');
// card.style.cssText = 'background-color: blue; height:220px; width:200px';
// cardSection.appendChild(card);
// cardSection.append( () => {document.createElement('div').style.cssText = 'background-color: red; height:200px; width:180px';});
// cardSection.append( () => {document.createElement('div').style.cssText = 'background-color: blue; height:200px; width:180px';});
// cardSection.append( () => {document.createElement('div').style.cssText = 'background-color: red; height:200px; width:180px';});

// let redCard1 = document.createElement('div');
// redCard1.style.cssText = 'background-color: red; height: 220px; width: 200px';
// cardSection.appendChild(redCard1);

// let blueCard2 = document.createElement('div');
// blueCard2.style.cssText = 'background-color: blue; height: 220px; width: 200px';
// cardSection.appendChild(blueCard2);

// let redCard2 = document.createElement('div');
// redCard2.style.cssText = 'background-color: red; height: 220px; width: 200px';
// cardSection.appendChild(redCard2);
let cardSection = document.querySelector('.cards');
function addCard(card){
    cardSection.appendChild(card());
}

for(let i = 0; i<7; i++){
    addCard(() => {
        let newCard = document.createElement('div');
        newCard.style.cssText= 'background-color: red; height:200px; width:180px';
        return newCard});
}