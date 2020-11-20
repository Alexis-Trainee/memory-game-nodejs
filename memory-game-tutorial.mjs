const gameInstructions = (tutorial) =>{
    console.log("|------------------------------------------------------------------------------------------------------------------|");
    console.log("|--------------------------------------------TUTORIAL DO JOGO------------------------------------------------------|\n");
    console.log("|* ESTE É UM JOGO DA MEMÓRIA CONSTITUIDO DE UM TABULEIRO 4X4 OU SEJA 4 LINHAS E 4 COLUNAS.                         |");
    console.log("|* O JOGO POSSUI UMA SEQUÊNCIA DE LETRAS QUE VÃO DA LETRA A ATÉ A LETRA H.                                         |");
    console.log("|* CADA LETRA TEM SUA CÓPIA CORRESPONDENTE NO TABULEIRO, ELAS ESTRARÃO OCULTADAS PELO CARACTERE ?                  |");
    console.log("|* DEVERÁ SER DIGITADO UM NÚMERO ENTRE 0 E 15 PARA ABRIR A PRIMEIRA CARTA E NOVAMENTE O JOGO PEDIRÁ QUE NOVAMENTE  |");
    console.log("|* QUE SEJA DITITADO UM NÚMERO ENTRE ZERO E 15 PARA ABRIR UMA SEGUNDA CARTA. SE A CARTA ENCONTRADA FOR IGUAL A PRI-|");
    console.log("|* MEIRA CARTA O JOGADOR SOMARÁ 1 PONTO E DEVERÁ CONTINUAR ETÉ QUE O MESMO ERRE.                                   |");
    console.log("|* EM CASO DE ERRAR A CARTA  A VEZ PASSARÁ PARA O PRÓXIMO JOGADOR. O JOGO ACABARÁ QUANDO TODAS AS CARTAS E SEUS    |");
    console.log("|* PARES FOREM ENCONTRADOS, O JOGADOR QUE SOMAR MAIS PONTOS SERÁ O VENCEDOR. CASO OS JOGADORES FAÇAM A MESMA QUAN- |");
    console.log("|* TIDADE DE PONTOS A PARTIDA TERMINARÁ EMPATADA NÃO HAVENDO NENHU GANHADOR.                                       |\n");
    console.log("|* OBSERVAÇÕES IMPORTÂNTES:                                                                                        |\n");
    console.log("|* O JOGO SOLICITA O NOME DE CADA JOGADOR E DEVERÁ SEMPRE SE INICIAR PELO JOGADOR QUE DIGITOU SEU NOME PRIMEIRO.   |");
    console.log("|* A VEZ DESTE JOGADOR SÓ SE ENCERRA CASO ELE ERRE PASSANDO A VEZ PARA O PROXIMO JOGADOR OU ACERTE TODAS AS CARTAS |");
    console.log("|* CASO DESEJE SAIR ANTES DO JOGO TERMINAR APERTE CTRL+C QUE SAIRÁ DO JOGO MAS OS DADOS NÃO FICARÃO SALVOS.        |")
    console.log("|------------------------------------------------------------------------------------------------------------------|\n");
};

export{gameInstructions};
