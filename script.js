/* var não é muito utilizado mais, quando a variável irá mudar, usamos let
quando vai se manter constante, usamos const */
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