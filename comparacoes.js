// == (comparação implícita), só compara valor
/* == nesse caso, o conteúdo do texto é convertido pelo JavaScript para 
um número e fez a comparação entre o número e o texto(que foi convertido
em número)
*/

/* === compara os valores das variáveis e o tipo de dado; se não
bater tudo dá false.
A conversão não foi feita automaticamente, deve ser feita uma conversão
manual
*/
const numero = 5;
const texto = "5";
console.log(numero === texto)

//typeof: que tipo de dado a variável está armazenand
console.log(typeof numero);
console.log(typeof texto)

/*conversão explícita: o melhor a ser usado, e usar ===
Number()
String()

*/