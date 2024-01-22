let valorSalario = 1000
let valorBeneficios = 150

let valorImposto = 0
if (valorSalario >=0 && valorSalario <1100){
        valorImposto = 0.95 * valorSalario
    } else if (valorSalario >=1100.01 && valorSalario <2500){
        valorImposto = 0.90 * valorSalario
    } else if (valorSalario >=2500.01){
        valorImposto = 0.85 * valorSalario
}
let valorFinal = valorImposto + valorBeneficios
console.log("O salário final do colaborador é: " + valorFinal)

