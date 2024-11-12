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

//checagem de combinações 
function checkForMatch(){
   const cards = document.querySelectorAll('img');
   const option0oneId = cardsChosenId[0];
   const optionTwoId = cardsChosenId[1];

   //verificar clique na mesma imagem
   if(option0oneId == optionTwoId){
      cards[option0oneId].setAttribute('src','images/imagem.png');
      cards[option0oneId].setAttribute('src','images/imagem.png');
      alert('você clicou na mesma imagem');
   }
   //verificar combinação se click em imagens diferentes
   else if(cardsChosen[0] === cardsChosen[1]){
      cards[option0oneId].setAttribute('src', 'images/check.png');
      cards[option0oneId].setAttribute('src', 'images/check.png');
      cards[option0oneId].removeEventListener('click',flipCard);
      cards[option0oneId].removeEventListener('click',flipCard);
      cardsWon.push(cardsChosen);
      alert('você encontrou uma combinação')
}else{
   cards[option0oneId].setAttribute('src', 'images/imagens.png');
   cards[option0oneId].setAttribute('src', 'images/imagens.png');
   alert('errou, tente novamente');
}
   cardsChosen = [];
   cardsChosenId = [];
//mostrar placar
resultView.textContent = 'pares encontrados: '+cardsWon.length
if(cards.Won.length === cards.length/2){
   resultView.textContent = 'parabéns, você ganhou'; 
}

}
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
      if(cardsChosen.length === 2){
         setTimeout(checkForMatch(), 500);
      }
   }
   createBoard();
});