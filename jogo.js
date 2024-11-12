document.addEventListener("DOMContentLoaded", () => {

const cards = [
    {
       name:'barca.png',
       img:'imagens/barca.png',
    },
    {
        name:'coxa.png',
        img:'imagens/coxa.png',
     },
     {
        name:'city.png',
        img:'imagens/city.png',
     },
     {
        name:'palmeiras.png',
        img:'imagens/palmeiras.png',
     },
     {
        name:'CRVascodaGama.png',
        img:'imagens/CRVascodaGama.png',
     },
     {
        name:'botafogo.png',
        img:'imagens/botafogo.png',
     },
     {
        name:'santos_Logo.png',
        img:'imagens/santos_Logo.png',
     },
     {
        name:'milan.png',
        img:'imagens/milan.png',
     },
     {
        name:'barca.png',
        img:'imagens/barca.png',
     },
     {
         name:'coxa.png',
         img:'imagens/coxa.png',
      },
      {
         name:'city.png',
         img:'imagens/city.png',
      },
      {
         name:'palmeiras.png',
         img:'imagens/palmeiras.png',
      },
      {
         name:'CRVascodaGama.png',
         img:'imagens/CRVascodaGama.png',
      },
      {
         name:'botafogo.png',
         img:'imagens/botafogo.png',
      },
      {
         name:'santos_Logo.png',
         img:'imagens/santos_Logo.png',
      },
      {
         name:'milan.png',
         img:'imagens/milan.png',
      }
]

//embarahar todas as cartas
cards.sort(() => 0.5 - Math.random());
//carregar elementos html no script
const board = document.querySelector('.board');
const resultView = document.querySelector('#result');
let cardsChosen = []; //cartas escolhidas 
let cardsChosenId = [];//id das cartas escolhidas
let cardsWon = [] //cartas combinas

//criar o quadro de cartas
function createBoard(){
   for(let i = 0; i < cards.length; i++){
    const card = document.createElement('img')
    card.setAttribute('src', 'images/imagem.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    board.appendChild(card);
   
   }
   }
   function flipCard(){
      let cardId = this.getAttribue('data-id');
      cardsChosen.push(cards[cardId.name]);
      cardsChosenId.push(cardId);
      this.setAttribute('src', cards[cardId].img);
   }
   createBoard();
});