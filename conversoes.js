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

//String(): quer transformar um número numa string;
//Number() : quer transformar uma string num número;
*/
console.log(numero + Number(numeroString));
/* Se numeroString="456a", o resultado da conversão Number(numeroString)
seria igual a NaN (not a number);
*/