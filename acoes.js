var jogador = null;
var jogadorSelecionado = document.getElementById(elementid = jogadorSelecionado);

mudarJogador(valor =  'X');


function escolherQuadrado(id){ //função ao escolher o quadrado 
    console.log('Clicou no quadrado'); // 
    console.log(id); // mostrar todos id dos quadrados

    var quadrado = document.getElementById(id); // vai receber  elemento HTML 

    if(quadrado.innerHTML !== '-'){
        alert('Quadrado já escolhido!!! Por gentileza, escolha outro!');
        return;        
    }


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


//Verificar se alguém já venceu 
// Verificar de todas sequencias possiveis de vencer
function checaVencedor(){
    var quadrado1 = document.getElementById(elementid = 1);
    var quadrado2 = document.getElementById(elementid = 2);
    var quadrado3 = document.getElementById(elementid = 3);
    var quadrado4 = document.getElementById(elementid = 4);
    var quadrado5 = document.getElementById(elementid = 5);
    var quadrado6 = document.getElementById(elementid = 6);
    var quadrado7 = document.getElementById(elementid = 7);
    var quadrado8 = document.getElementById(elementid = 8);
    var quadrado9 = document.getElementById(elementid = 9);
}