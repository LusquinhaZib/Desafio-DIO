let winRatioResult = winRatio(93, 22)
let elo = getElo(winRatioResult)
console.log("O herói tem um saldo de " + winRatioResult + " e está no Elo " + elo) 

function winRatio(vitorias, derrotas){
    let average = vitorias - derrotas
    return average
}
function getElo(winRatioResult){
    let elo = "Imortal"
    if (winRatioResult < 10) {
        elo = "Ferro"
    } else if (winRatioResult >= 11 && winRatioResult <= 20){
        elo = "Bronze";
    } else if (winRatioResult >= 21 && winRatioResult <= 50){
        elo = "Prata";
    } else if (winRatioResult >= 51 && winRatioResult <= 80){
        elo = "Ouro";
    } else if (winRatioResult >= 81 && winRatioResult <= 90){
        elo = "Diamante"
    } else if (winRatioResult >= 91 && winRatioResult <= 100){
        elo = "Lendário"
    }
    return elo
}
