//Classificador de nível do Herói//
let nomeDoHeroi = "Jin Sakai"
let xpDoHeroi = 11000

if (xpDoHeroi < 1000) {
    console.log("O herói de nome " + nomeDoHeroi + " está no nível ferro!");
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000){
    console.log("O herói de nome " + nomeDoHeroi + " está no nível Bronze!");
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000){
    console.log("O herói de nome " + nomeDoHeroi + " está no nível Prata");
} else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000){
    console.log("O herói de nome " + nomeDoHeroi + " está no nível Ouro");
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000){
        console.log("O herói de nome " + nomeDoHeroi + " está no nível Platina");
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000){
    console.log("O herói de nome " + nomeDoHeroi + " está no nível Ascendente");
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000){
    console.log("O herói de nome " + nomeDoHeroi + " está no nível Imortal");
} else {
    console.log("O herói de nome " + nomeDoHeroi + " está no nível Radiante")
}