var numbers = ['07', '26', '11', '08', '21', '16', '27', '23']
numbers = [...numbers, ...numbers]

var cardsToBeMatched = 16;

// Fisher-Yates Shuffle Algorithm
function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}
numbers = shuffle(numbers);

let contentDiv = document.querySelector('.content');
for( let i = 0; i<16; i++) {
    let card = document.createElement('div');
    card.setAttribute('id', i);
    card.setAttribute('class', 'flip-card card');
    let innerCard = document.createElement('div');
    innerCard.setAttribute('class', 'flip-card-inner');
    let cardFront = document.createElement('div');
    cardFront.setAttribute('class', 'flip-card-front');
    cardFront.innerHTML = `<div class="center-me">?</div>`;
    let cardBack = document.createElement('div');
    cardBack.setAttribute('class', 'flip-card-back');
    cardBack.innerHTML = `<div class="center-me">${numbers.shift()}</div>`
    innerCard.appendChild(cardFront);
    innerCard.appendChild(cardBack);
    card.appendChild(innerCard);
    contentDiv.appendChild(card)
}

var cards = [];
for(let i = 0; i<16; i++) {
    let card = document.getElementById(i)
    card.firstChild.addEventListener('click', () => {
        if(cards.length < 2) {
            if (cards.length === 0 || (cards.length === 1 && cards[0].elem !== i)) {
                card.firstChild.classList.add('flip-card-inner-flip');
                cards.push( { elem: i, cardObj: card });
            }
            if(cards.length === 2) {
                setTimeout(() => {
                    checkSame();
                }, 1000);
            }
        }
    })
}

const checkSame = () => {
    if(cards[0].cardObj.lastElementChild.lastChild.innerHTML === cards[1].cardObj.lastElementChild.lastChild.innerHTML) {
        cards[0].cardObj.firstChild.style.visibility = 'hidden';
        cards[1].cardObj.firstChild.style.visibility = 'hidden';
        cards = [];
        cardsToBeMatched -= 2;
        if(cardsToBeMatched === 0) {
            contentDiv.innerHTML = "<h3 style='text-align: center;'>You Won</h3>"
        }
    } else {
        cards[0].cardObj.firstChild.classList.remove('flip-card-inner-flip');
        cards[1].cardObj.firstChild.classList.remove('flip-card-inner-flip');
        cards = [];
    }
}