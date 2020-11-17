import readlineSync from 'readline-sync';

let displayDeck = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];


// let displayDeck = deck.reduce((replace,deck)=> replace.concat('?'),[])
console.log('MEMORY GAME');
console.table(displayDeck);
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
console.log(shuffle(displayDeck));

const dataInput=(data)=>{
    let checkData= true;
    let result;
    while(checkData){
        const input = readlineSync.question('  Digite um valor entre 0 e 15:\n');
        if (input >=0 && input <=15){
            result=input;
            checkData= false;

        }else {
            console.log(input,"INVALID!\n");
        }
    }
    return result;
}//fim dataInput

let runGame = true;
let x;
let y;
while(runGame){
    const firstNumber= dataInput('card one');
    const secondNumber= dataInput('card two');
    console.log(displayDeck[firstNumber], displayDeck[secondNumber], '\n\n')
    /// console.log("você digitou " +firstNumber+ " primeiro e depois " +secondNumber+ '\n\n');
    console.log('_________________________________________________________________________')

    if (firstNumber===secondNumber){
        console.log("Você digitou o mesmo número duas vezes e está ação é invalida. Por favor tente outro número")

    }

    if (firstNumber!==secondNumber && displayDeck[firstNumber]===displayDeck[secondNumber]){
        console.log('Acertou miseravi kkkk')
    }


}//runGame
