/* var não é muito utilizado mais, quando a variável irá mudar, usamos let
quando vai se manter constante, usamos const.
var tem um escopo global, então funciona em qualquer parte do código,
o que pode gerar possíveis problemas em relação à lógica da aplicação.

let e const têm escopo local, sendo assim, não podem ser acessadas 
em outros escopos, e const não pode ter seu valor alterado depois de 
definido.*/

/*
var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area)
var area;
*/

/*

let forma = 'retângulo';
let altura = 5;
let comprimento = 7;
let area;

if (forma === 'retângulo'){
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area)
*/

const forma = 'triângulo';
const altura = 5;
const comprimento = 7;
let area;


if (forma === 'retângulo'){
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}
console.log(area)

/* 
//tipagem dinâmica;
//untyped;

JavaScript tipagem dinâmica. Troca o tipo de dado, mas o js aceita 
e identifica qual é ao ler a variável, por isso possui tipagem dinâmica
ou untyped

let minhaVar = 876;
minhaVar = "texto";
minhaVar = true;

//multiparadigma: resolve o mesmo problema de diversas formas
// linguagem interpretada: Linguagem do JS, escreve o código e ele é executado 
(um programa lê a linha do código e executa o que está escrito nessa linha);

//linguagem compilada:o código passa por um programa compilador, que transforma
o código em linguagem de máquina (linguagem que o computador entende), e quando
for executar, será executada essa linguagem de máquina.

*/