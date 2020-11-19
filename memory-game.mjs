import readlineSync from 'readline-sync';

let deck = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];


let displayDeck = deck.reduce((replace,deck)=> replace.concat('?'),[])
console.log('MEMORY GAME');
console.table(deck);
console.log('\n\n')

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
}
shuffle(deck);//CHAMA FUNÇÃO
const shuffledDeck = shuffle(deck);//SALVANDO NA CONSTANTE PARA NÃO EMBARALHAR DE NOVO QUANDO CHAMAR NO LAÇO runGame. <<<<<<<<<
//console.log(shuffledDeck)//é só um teste apagar depois.

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
}//fim dataInput
// const copyShuffleDeck = shuffle(deck) apagar depois

const verifyCards =(firstNumber, secondNumber)=>{
    return firstNumber!==secondNumber && shuffledDeck[firstNumber]===shuffledDeck[secondNumber]
}
//-------------------------------------------------------------------------------------------------------//

let players = {'play1':{score:0}, 'play2':{score:0}};//mudado a variável de const para let.
let currentPlayer = 'play1';
var {play1:{score}} = players;
console.log(players);







//___________________________________________________________________________________________________________//
let runGame = true;
let cont=0;
// let x;
// let y;
while(runGame){
    console.table (shuffledDeck) //apagar depois
    let copyDisplayDeck = [...displayDeck]; 
    console.log(copyDisplayDeck)// apagar depois
    const firstNumber= dataInput('card one');
    const secondNumber= dataInput('card two');
    console.log(displayDeck[firstNumber], displayDeck[secondNumber], '\n\n');//apagar depois
    console.log(players);
    /// console.log("você digitou " +firstNumber+ " primeiro e depois " +secondNumber+ '\n\n');
    console.log('_________________________________________________________________________')
/*
     if (firstNumber===secondNumber){
        console.log("Você digitou o mesmo número duas vezes e está ação é invalida. Por favor tente outro número")

    }

    if (firstNumber!==secondNumber && displayDeck[firstNumber]===displayDeck[secondNumber]){
        console.log('Acertou miseravi kkkk')
   console.log(displayDeck[firstNumber])//teste 
    }*///FOI SIMPLIFICADO COM A FUNÇÃO "verifyCards".

    if (verifyCards(firstNumber, secondNumber)) {
        displayDeck[firstNumber] = shuffledDeck[firstNumber];
        displayDeck[secondNumber] = shuffledDeck[secondNumber];
        console.log ('CERTO!!!')
        cont=cont+1
    }else{
console.log('invalido')
    }


    if (cont>3) {
        console.log('OK!!!')
runGame = false;
        
    }


if (firstNumber !== secondNumber && shuffledDeck[firstNumber] === shuffledDeck[secondNumber]) {
console.log('Muito bem você acertou então ainda é sua vez!\n\n');
    players[currentPlayer].score++;

}else if (firstNumber === secondNumber || shuffledDeck[firstNumber] !== shuffledDeck[secondNumber]) {
console.log ('próximo jogador\n\n')

    currentPlayer = currentPlayer=== 'play1' ? 'play2' : 'play1';
    console.log('next players',currentPlayer)
};
console.log(players);


}//runGame


