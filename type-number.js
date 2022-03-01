/*
Os tipos de JavaScript podem ser divididos em duas categorias: tipos primitivos e tipos de objetos. 
Os tipos primitivos do JavaScript incluem números, palavras ou texto (conhecidas como strings)
e valores booleanos (conhecidos como booleanos (Verdadeiro ou falso)).

Dica: podemos utilizar o número PI através com o código Math.PI
------------------------------------------------------------------------------------------------------------
O ponto flutuante pode ter um ponto decimal; eles usam a sintaxe tradicional para números reais.
Um valor real é representado como a parte integral do número, seguido por um ponto decimal 
e a parte fracionária do número.

Pontos flutuantes também podem ser representados usando notação exponencial: 
um número real seguido pela letra e (ou E), seguido por um sinal opcional de mais (+) ou menos (-),
e por um expoente inteiro. Essa notação representa o número real multiplicado por 10 à potência do expoente.

Divisão por zero não é um erro em JavaScript: ele simplesmente retorna “Infinity”. No entanto, há uma exceção: 
zero dividido por zero não tem um valor bem definido e o resultado dessa operação é o valor especial
não numérico NaN.
-------------------------------------------------------------------------------------------------------------
O método Math.round() retorna o valor de um número arredondado para o inteiro mais próximo.
Por exemplo, o número 17.045454545454547 seria arredondado para 17 utilizando Math.round().

function ganhoPorHora(salario, horasTrabalhadasNoMes) {

  const salarioHora = (salario / horasTrabalhadasNoMes); 

  return Math.round(salarioHora);

}
--------------------------------------------------------------------------------------------------------------
Com o auxílio do método .toFixed() eu consigo controlar o número de casas decimais após a vírgula, 
de forma mais simples, indicando o número de casas que eu quero como parâmetro.
Como queremos deixar a resposta com duas casas decimais após a vírgula utilizamos toFixed(2).
O método .toFixed() arredonda o número para cima, isto é, se temos, por exemplo 11.123, o valor fica 11.12, 
já se temos 20.555, o valor fica 20.56.
Outro ponto importante de se observar é que seu retorno será uma string representando o número.
function ganhoPorHora(salario, horasTrabalhadasNoMes) {

  const salarioHora = (salario / horasTrabalhadasNoMes); 

  const total = salarioHora.toFixed(2);

  return total;

};

-----------------------------------------------------------------------------------------------------------
No JavaScript temos um método chamado toLocaleString() que converte um número para uma string, 
já tratando a questão do arredondamento e convertendo para a moeda do país que queremos, no nosso caso, o real, 
tornando a tarefa do programador muito mais simples.

O método toLocaleString() recebe alguns argumento - um objeto literal com as propriedades -, no meu caso
eu utilizei:

style : Que é o estilo do formato a ser utilizado, aqui é permitido usar:

decimal para representar números simples.

currency que diz respeito ao formato monetário e que vai indicar a moeda que vai ser utilizada.

percent para formato percentual.

currency: A moeda para usar na formatação monetária


function ganhoPorHora(salario, horasTrabalhadasNoMes) {

  const salarioHora = (salario / horasTrabalhadasNoMes); 

  const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return formatado;

}

Utilizando a formatação do toLocaleString o resultado ficaria assim:
ganhoPorHora(3000,176); //'R$ 17,05'
------------------------------------------------------------------------------------------------------------
No JavaScript temos outros métodos que podem ser utilizadas para o arredondamento como:

Math.ceil() que retorna o maior número inteiro que é maior que o número passado, 
por exemplo Math.ceil(11.123), o valor fica 12

Math.floor() que retorna o menor número inteiro que é menor que o número passado, 
por exemplo Math.floor(11.789), o valor fica 11.

No caso de números, é possível salvar em uma variável não somente o número em si, 
como em const num = 5;, mas também o resultado de uma operação (ou mais):
const soma = 10 + 10;
const multiplicacao = 10 * 10;
const operacao = (soma + multiplicacao) + 10;

*/

// tipo Number

// const: usada quando precisamos guardar dados específicos como números, textos
const meuNumero = 3;

const primeiroNumero = 5;
const segundoNumero = 9;
const operacaoMatematica = primeiroNumero + segundoNumero;

console.log(operacaoMatematica);

//ponto flutuante: números decimais;

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao)

// NaN -> Not a Number (não é um número)

const alura = "Alura";
console.log(alura * primeiroNumero);