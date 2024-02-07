// Coleta de informações do usuário
let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));
let idade = parseInt(prompt("Digite sua idade:"));

// Cálculo do IMC (Índice de Massa Corporal)
let imc = peso / (altura * altura);

if(imc < 18.5){
    console.log("Magreza");
} else if (imc >= 18.5 && imc <= 24.9){
   console.log("Normal");
} else if(imc >= 25 && imc <= 30){
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}

// Descoberta do ano de nascimento
let anoAtual = 2023;
let anoNasc = anoAtual - idade;
console.log("Você nasceu no ano de " + anoNasc);

// Exibição dos anos e idades
let idadeAtual = 0;
for(let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++){
   console.log(anoVivido + " - " + idadeAtual + " anos de idade");
   idadeAtual++;
}

// Loop Do-While para continuar ou sair
let continuar;
do {
   continuar = prompt("Deseja inserir os dados novamente? (s/n)");
} while(continuar === "s");