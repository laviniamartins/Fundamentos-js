// boolean -> true or false;
const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy -> podem se comportar como se fossem booleanos;

// 0 -> false;
// 1 -> true;

console.log( 0 == false);
console.log("" == false);
console.log( 1 == true);

// null: valor nulo, representa o vazio, nada.
//undefined: não tem valor;

let minhaVar;
// essa variável será lida pelo JS como undefined, pois não atribuiu
//nenhum valor a ela;

let varNull = null;
// essa variável será lida pelo JS como Null, pois um valor foi atribuído
// a ela (o valor nulo);

let numero = 3;
let texto = 'Alura';

console.log(typeof minhaVar)
console.log(typeof varNull)