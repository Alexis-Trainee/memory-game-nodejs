//ESTE ARQUIVO É SÓ UM TESTE.
import {shuffle, verifyCards, winner} from './memory-game-function.mjs'; 
import readlineSync from 'readline-sync';
let deck = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

let displayDeck = deck.reduce((replace,deck)=> replace.concat('?'),[]);
console.log('MEMORY GAME');
console.table(deck);
console.log('\n\n');

shuffle(deck);//CHAMA FUNÇÃO
const shuffledDeck = shuffle(deck);//SALVANDO NA CONSTANTE PARA NÃO EMBARALHAR DE NOVO QUANDO CHAMAR NO LAÇO runGame. <<<<<<<<<

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
};//fim dataInput

const players = {'play1':{score:0}, 'play2':{score:0}};
let currentPlayer = 'play1';
var {play1:{score}} = players;
console.log(players,'\n\n');//apagar

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
    const secondNumber= dataInput('card two');
    console.log("[",person1,' score:',players.play1.score, "] [",person2,' score:',players.play2.score,"]");
    console.log(copyDisplayDeck);
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

