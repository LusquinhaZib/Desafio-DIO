let resultado = winRatio(93, 22)

function winRatio(vitorias, derrotas){
    let average = vitorias - derrotas
    return average
}

//Classificador de Elo//

if (resultado < 10) {
    console.log("O herói tem um saldo de " + resultado + " e está no Elo Ferro!");
} else if (resultado >= 11 && resultado <= 20){
    console.log("O herói tem um saldo de " + resultado + " e está no Elo Bronze!");
} else if (resultado >= 21 && resultado <= 50){
    console.log("O herói tem um saldo de " + resultado + " e está no Elo Prata!");
} else if (resultado >= 51 && resultado <= 80){
    console.log("O herói tem um saldo de " + resultado + " e está no Elo Ouro!");
} else if (resultado >= 81 && resultado <= 90){
    console.log("O herói tem um saldo de " + resultado + " e está no Elo Diamante!");
} else if (resultado >= 91 && resultado <= 100){
    console.log("O herói tem um saldo de " + resultado + " e está no Elo Lendário!");
} else {
    console.log("O herói tem um saldo de " + resultado + " e está no Elo Imortal!")
}