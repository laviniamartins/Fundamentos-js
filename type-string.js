/*string: qualquer tipo de dado que não seja número nem booleano (verdadeiro ou falso), inclusive, pode ser 
uma cadeia de caracteres, como uma senha.. Para utilizar a string deve-se colocar aspas (duplas ou simples).
Tudo que estiver entre aspas o JS considera como uma string, como uma cadeia de números entre aspas.
 */

const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!'; 
const senha = "senhaSuperSegura456!"
const stringDeNumeros = "34567"

const citacao = 'O Leo disse "oi!"'
/* foi utilizada a aspas simples para informar ao JS que é uma cadeia de string, de caractere,
e, dentro da cadeia de caractere para mencionar citação usou-se aspas duplas. O inverso também é válido.
*/

//concatenação(operador de +)
const citacao1 = "Meu nome é";
const meuNome = "Lavínia";
console.log(citacao1 + meuNome);

//template string ou template literal

/*
 um dos métodos de string nativos do JavaScript em ação, o toLowerCase() que converte todos os caracteres
 da string informada (no caso, input) para letras minúsculas (se forem algarismos, nada é convertido).
 A propriedade length pode ser utilizada para sabermos quantos caracteres uma string contém:
*/