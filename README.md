# memory-game-nodejs
Projeto de criação de um jogo da memória que rode no nodejs escrito utilizando somente javaScript.


dependencias: readlineSync, noje.js versão v13.10.0

Como o game funciona:

 O jogo se inicia com um laço chamado tutorialGame que chama a função gameInstructions.
 Essa função exibe na tela o tutorial do jogo. Após isso a variavél recebe um dado que é testado em uma condicional if se for verdadeiro sai do laço.
 
 * A função colsole.clear limpa o tutorial da tela do jogador antes de o jogo ser iniciado.
 * A variável deck contém o array com as letlas que formam o tabuleiro e as "cartas" do jogo.
 * A variável displayDeck cria uma copia da variável deck substituindo substituindo seus elementos por '?'.
 
 
 *Funções:
 -shuffle: que tem o papel de gerar um novo array com os elementos de deck embaralhados depois este novo array é atribuido a constante shuffledDeck.
 a constante shuffledDeck é responsavél por armazenar o novo array gerado na function shulled.
 -dataInput: recebe os dados digitados pelo usúario ela que é responsavél por coletar os dados que servirão para localizar os elementos no array deck;
 -verifyCards: verifica se os dados digitados são validos de acordo com a lógica do jogo.
 -winner: retorna o ganhador do jogo e seus pontos.
 -name: solicita aos jogadores que digitem seu nome.
 
 variáveis:
 runGame: tem o valor true.
 counter: inicia-se com 0.
 const person1 e person2 recebem os dados da função name;
 
a lógica acontece dentro do loop while(rungame){} enquanto sua condição estiver sendo satisfeita
 console.table (shuffledDeck); //está linha é apenas para facilitar os testes do jogo 
    const copyDisplayDeck = [...displayDeck]; copia displayDeck 
    console.log(copyDisplayDeck); imprime na tela 
    const firstNumber= dataInput('card one'); chama a função dataInput
    const secondNumber= dataInput('card two'); chama a função dataInput novamente
    console.log("[",person1,' score:',players.play1.score, "] [",person2,' score:',players.play2.score,"]"); imprime o nome dos jogadores e seus respectivos pontos
    console.log(copyDisplayDeck);
    console.log('_________________________________________________________________________'); serve para dividir visualmente cada turno.
    
    if (verifyCards(firstNumber, secondNumber)) {// se for verdadeiro faça
        displayDeck[firstNumber] = shuffledDeck[firstNumber];
        displayDeck[secondNumber] = shuffledDeck[secondNumber];
        counter = counter+1;
    };
//--------------------------------------------------------------------------------------------------------------------------------//
Se a condição abaixo for satisfeita ela imprime uma mensagem na tela atribui mais 1 ao obj players e imprime o nome dos jogadores e seus respectivos pontos.
    if (firstNumber !== secondNumber && shuffledDeck[firstNumber] === shuffledDeck[secondNumber]) {
        console.log('Muito bem você acertou então ainda é sua vez!\n\n');
        players[currentPlayer].score++;
        console.log("[",person1,' score:',players.play1.score, "] [",person2,' score:',players.play2.score,"]\n");

Se não imprime a mensagem de invalido e pasa a vez para o próximo jogador. Verificando se avez esta com o primeiro ou o segundo jogador.
    }else if (firstNumber === secondNumber || shuffledDeck[firstNumber] !== shuffledDeck[secondNumber]) {
        console.log ('INVÁLIDO PRÓXIMO JOGADOR\n\n');
        currentPlayer = currentPlayer=== 'play1' ? 'play2' : 'play1';
        console.log('NEXT PLAYER:',currentPlayer);
    };

Quando counter for igual a 8 
    if (counter>=8) {
        console.log(displayDeck);//imprime na tela o tabuleiro ja completado pelos jogadores
        winner('play');//chama a função winner que mostra o jogador que fez mais pontos e venceu a partida
        runGame = false//sai do loop while(runGame) e encerra o jogo.
    };

};//runGame


