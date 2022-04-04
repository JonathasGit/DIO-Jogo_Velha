var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById(elementid = jogadorSelecionado);
var vendcedorSelecionado = document.getElementById(elementid = vendcedorSelecionado);

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
checaVencedor();

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

    //Verifica  se as sequencias são iguais
    if(checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }
    if(checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }
    if(checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado4);
     
    }

}

//Para mudar o vencedor ali onde mostra o vencedor
function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vendcedorSelecionado.innerHTML = vencedor;

}


// Função para mudar a cor do quadrado, quando o jogador ganhar. 
function mudaCorQuadrado(quadrado1, quadrado2, quadrado3){
    quadrado1.style.color = '#00ff00';
    quadrado2.style.color = '#00ff00';
    quadrado3.style.color = '#00ff00';


}

//Checando a primeira sequencia de vencedor
function checaSequencia(quadrado1, quadrado2, quadrado3){
var eigual = false;

if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
    eigual = true;
}

return eigual;

}