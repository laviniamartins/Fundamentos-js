/* boolean
true -> verdadeiro
false -> falso

Ao executar o código console.log(bacharel == 1),
um erro NaN seria exibido, já que o valor armazenado 
na variável bacharel é um booleano e não um número.
Quase. Ao executar o código, o valor true seria exibido. 
Mesmo bacharel sendo um boolean, quando tentarmos comparar 
o valor 1 com == (dois sinais de igual, comparando apenas 
o valor e não o tipo), o JavaScript utiliza o princípio 
de variáveis "truthy"/"falsy" e considera o número 1 como 
equivalente a true e o número 0 equivalente a false.


*/
const primeiroNumero = 5;
const segundoNumero = 5;

// console.log (primeiroNumero === segundoNumero);
/* === faz uma comparação, = atribui um valor à variavel
à esquerda do igual
*/

const texto1 = "alura";
const texto2 = "Alura";
console.log(texto1 === texto2);