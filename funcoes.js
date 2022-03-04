/*
let x = "";
console.log(x);
x = "oi";
*/

// ---------------------- DECLARAÇÃO DE FUNÇÃO -----------------------------

// 1) declara a função
                        //string
function imprimeTexto (texto){
    console.log(texto);
}

// 2) executa a função (1 ou + vezes)

imprimeTexto(soma());
//imprimeTexto("hahahah")

// Há três formas de escrever funções

function soma() {
    // outros códigos, vários console.log
    // a linha do retorno deve ser a última coisa antes de fechar o bloco 
    // função, senão as coisas posteriores ao return não serão executadas.
    return 2 + 2;
}

//console.log(soma())