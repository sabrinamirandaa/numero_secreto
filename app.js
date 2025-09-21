// dar boas vindas ao jogador e perguntar o nome do jogador
alert("Boas vindas ao Jogo Secreto!");
let jogador = prompt("Qual é o seu nome?");
alert(`Bem vindo(a), ${jogador}!`);
let tentativas2 = 1;

// perguntar a idade do jogador e iniciar o jogo
let idade = prompt("Qual é a sua idade?");
alert(`Vamos iniciar o jogo, ${jogador}. Se prepare!`);

// perguntar um número de 1 a 30
let numeroMaximo = 5000;
let numero = parseInt(Math.random() * numeroMaximo + 1 );
let numero2 = prompt(`Escolha um número de 1 a ${{numeroMaximo}}`);
alert(`Você escolheu o número ${numero2}.`);

//enquanto o chute não for igual ao número secreto, continuar perguntando
    while ( numero2 != numero){
            numero2 = prompt("Tente novamente, escolha um número de 1 a 100");

            
// verificar se o número é igual ao número secreto
    if (numero2 == numero){
        break;
    
    }
    else {
        if (numero2 < numero){
            alert (`O número secreto é maior que ${numero2}`);
        }
        else {
            alert (`O número secreto é menor que ${numero2}`);
        }
        tentativas2++;
    }
       // tentativas = tentativas +1;
}
    //"Tentativas é maior que um? Então, faça X. Caso contrário, faça Y".
    let palavraTentativa = tentativas2 > 1? "tentativas" : "tentativa";
                   alert(`Parabéns! Você venceu, o número secreto é ${numero} com ${tentativas2} ${palavraTentativa}.`);
    // if (tentativas2 > 1) {
    // } else {
          //  alert(`Parabéns! Você venceu, o número secreto é ${numero} com ${tentativas2} tentativa.`);
