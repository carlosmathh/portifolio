//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do numero segreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero';
let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
mensagenInicial();
function textoNaTela(tag, texto) {
    let exibirTextos = document.querySelector(tag);
    exibirTextos.innerHTML = (texto);
}
function mensagenInicial() {
    textoNaTela('h1', 'Jogo do numero segreto');
    textoNaTela('p', 'Escolha um numero de 1 a 10');
}


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        textoNaTela('h1', 'Parabens voçê acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Voçê descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        textoNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            textoNaTela('p', 'numero secreto é menor');
        } else {
            textoNaTela('p', 'numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }

}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidaDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidaDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    tentativas = 1;
    mensagenInicial();
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}