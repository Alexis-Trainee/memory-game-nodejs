import readlineSync from 'readline-sync';
import {gameInstructions} from './memory-game-tutorial.mjs'

let tutorialGame = true;
while(tutorialGame){
    console.log(gameInstructions());
    let inputData = readlineSync.question('  Digite $ para iniciar o jogo:\n');
    if(inputData === '$') {
        tutorialGame = false;
    }
};
console.clear();

let deck = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

let displayDeck = deck.reduce((replace,deck)=> replace.concat('?'),[]);
console.log('MEMORY GAME');
// console.table(deck);
console.log('\n\n');

function shuffle(array) {
    //m= currentIndex, t= temporaryIndex, i= randomIndex;
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle…//Enquanto ainda houver elementos para embaralhar.
    while (currentIndex !==0) {

        // Pick a remaining element…// Escolha um elemento restante…
        randomIndex = Math.floor(Math.random() * currentIndex--);

        // And swap it with the current element.// E troque-o com o elemento atual.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};
shuffle(deck);
const shuffledDeck = shuffle(deck);

const dataInput=(data)=>{
    let checkData= true;
    let result;

    while(checkData){
        const input = Number(readlineSync.question('  Digite um valor entre 0 e 15:\n')) ;
        if (input >=0 && input <=15){
            result=input;
            checkData= false;

        }else {
            console.log(input,"INVALID!\n");
        }
    }
    return result;
};

const verifyCards =(firstNumber, secondNumber)=>{
    return firstNumber!==secondNumber && shuffledDeck[firstNumber]===shuffledDeck[secondNumber]
};

const players = {'play1':{score:0}, 'play2':{score:0}};
let currentPlayer = 'play1';
var {play1:{score}} = players;
console.log(players,'\n\n');

const winner =(play)=>{
    if (players.play1.score>players.play2.score){
        console.log('Parabéns ',person1,'seu score é de:',players.play1.score, 'você é o(a) vencedor(a) do jogo!!!');

    }else if(players.play1.score === players.play2.score ) {
        console.log("PARTIDA EMPATADA!");

    }else {
        console.log('Parabéns ',person2,'seu score é de:',players.play2.score, 'você é o(a) vencedor(a) do jogo!!!');
    }
};

const name =(name)=>{
    const personName = (readlineSync.question('QUAL SEU NOME:\n')) ;
    return (personName);
};

let runGame = true;
let counter = 0;
const person1 = name('name');
const person2 = name('name');

while(runGame){
    console.table (shuffledDeck); //está linha é apenas para facilitar os testes apagar depois
    const copyDisplayDeck = [...displayDeck]; 
    console.log(copyDisplayDeck);
    const firstNumber= dataInput('card one');
    console.log('você encontrou: (',shuffledDeck[firstNumber],') ao digitar:',firstNumber,'\n');
    const secondNumber= dataInput('card two');
    console.log('você encontrou: (',shuffledDeck[secondNumber],') ao digitar:',secondNumber,'\n');
    console.log("[",person1,' score:',players.play1.score, "] [",person2,' score:',players.play2.score,"]");
    // console.log(copyDisplayDeck);
    console.log('_________________________________________________________________________');

    if (verifyCards(firstNumber, secondNumber)) {
        displayDeck[firstNumber] = shuffledDeck[firstNumber];
        displayDeck[secondNumber] = shuffledDeck[secondNumber];
        counter = counter+1;
    };

    if (firstNumber !== secondNumber && shuffledDeck[firstNumber] === shuffledDeck[secondNumber]) {
        console.log('Muito bem você acertou então ainda é sua vez!\n\n');
        players[currentPlayer].score++;
        console.log("[",person1,' score:',players.play1.score, "] [",person2,' score:',players.play2.score,"]\n");

    }else if (firstNumber === secondNumber || shuffledDeck[firstNumber] !== shuffledDeck[secondNumber]) {
        console.log ('INVÁLIDO PRÓXIMO JOGADOR\n\n');
        currentPlayer = currentPlayer=== 'play1' ? 'play2' : 'play1';
        console.log('NEXT PLAYER:',currentPlayer);
    };

    if (counter>=8) {
        console.log(displayDeck);
        winner('play');
        runGame = false
    };

};//runGame

