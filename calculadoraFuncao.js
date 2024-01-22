
let salarioBruto = 3000
let beneficios = 230
let salarioImposto = calcularSalarioImposto(salarioBruto)

console.log("Salário final = " + calcularSalarioFinal(salarioImposto, beneficios))

function calcularSalarioImposto(salarioBruto){
    let impostoMin = 0.95
    let impostoMed = 0.90
    let impostoMax = 0.85
    let salarioMin = 1100
    let salarioMax = 2500
    let salarioFinal = salarioBruto
    if (salarioBruto < 0){
        console.log("Insira um salário válido")
    } else if ( salarioBruto >= 0 && salarioBruto <= salarioMin){
        salarioFinal *= impostoMin
    } else if (salarioBruto > salarioMin && salarioBruto <= salarioMax){
        salarioFinal *= impostoMed
    } else {
        salarioFinal *= impostoMax
    } 
    return salarioFinal
} 

function calcularSalarioFinal(salario, beneficios){
    return salario + beneficios
}