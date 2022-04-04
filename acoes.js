var jogador = null;
var jogadorSelecionado = document.getElementById(elementid = jogadorSelecionado);

mudarJogador(valor =  'X');


function escolherQuadrado(id){ //função ao escolher o quadrado 
    console.log('Clicou no quadrado'); // 
    console.log(id); // mostrar todos id dos quadrados

    var quadrado = document.getElementById(id); // vai receber  elemento HTML 
    quadrado.innerHTML = jogador; //trocar o texto do html 
    quadrado.style.color = '#000';


//Verificar o jogador 
if(jogador === 'X'){
    jogador = 'O';
} else{
    jogador = 'X';
}

mudarJogador(jogador);

}

//Função que muda o jogador

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}