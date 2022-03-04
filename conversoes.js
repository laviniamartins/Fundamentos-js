// tipo de dado
//booleanos

/* conversão implícita
*/
const numero = 456;
const numeroString = "456";

//console.log(numero == numeroString);
//== compara só o conteúdo; === compara o conteúdo e tipo (string,numero)
//console.log(numero + numeroString);

// ---------------------------------------------------------------------

/* conversão explícita

String(): quer transformar um número numa string;
Outra opção para transformarmos um valor em String é usar o toString():

let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); 
// o .toString() é uma 
outra forma para  fazer essa conversão, que é mais parecida 
com outras linguagens de programação.

Number() : quer transformar uma string num número;
Podemos usar o operador de soma + para fazer a conversão de textos 
para números, colocando-os antes das variáveis:

let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String
para números realizado usando o + antes das variáveis

*/
console.log(numero + Number(numeroString));
/* Se numeroString="456a", o resultado da conversão Number(numeroString)
seria igual a NaN (not a number);
*/