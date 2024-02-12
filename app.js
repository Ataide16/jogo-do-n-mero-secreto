let listaDeNumerosSorteados = [];
let numerolimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextonaTela(tag, texto) {
    let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brasilian Portuguese Female',{rate:1.2} );
}

function exibirMensagemInicial() {
    exibirTextonaTela('h1','Jogo do numero secreto');
    exibirTextonaTela('p','escolha um número entre 1 e 10');       
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;  

 if (chute == numeroSecreto) {
    exibirTextonaTela('h1','Acertou!!');
    let palavraTentativa = tentativas > 1 ? `tentativas` : `tentaiva`;
    let mensagemTentativas =` Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextonaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
} else{
    if (chute > numeroSecreto){
        exibirTextonaTela('p','o número secreto é menor')
    }else{
        exibirTextonaTela('p','o número secreto e maior')
    }
    tentativas ++;
    limpaCampo();
}
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numerolimite +1);
let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if (quantidadeDeElementosNaLista == numerolimite) {
    listaDeNumerosSorteados = [];
}
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
} else{
    listaDeNumerosSorteados.push(numeroEscolhido);

return numeroEscolhido;
}
}

function limpaCampo() {
    chute = document.querySelector('input');
chute.value = '';
}


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limpaCampo();
    tentativas = 1;
    exibirMensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled'.true);
}