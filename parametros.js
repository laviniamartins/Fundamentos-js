// parâmetros de função

                //2     //2
function soma(numero1, numero2) {
    return numero1 + numero2;
}

/*
console.log(soma(2, 2))
console.log(soma(245, 20))
console.log(soma(-500, 60))
*/

// parâmetros x argumentos
// O JS identifica os parâmetros pela ordem
/*
Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado;   
algumas documentações se referem a parâmetros no momento em que a função    
é definida (no caso, numero1, numero2, etc) e argumentos como os dados que  
utilizamos para executar a função (ou seja, 30, 45, etc).
*/

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}
//console.log(nomeIdade(24, "Lavínia"))

function multiplica(numero1, numero2){
    return numero1 * numero2;
}

//                      6               9
//console.log(multiplica(soma(3, 3), soma(4, 5)))

// NaN pois o segundo parâmetro foi excluído! O que pode ser feito para não dar     
//erro com um parâmetro é definir os valores:
/*
function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}
*/
console.log(multiplica(soma(3, 3)))




