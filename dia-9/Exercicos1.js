let nome = prompt("Qual é o seu nome?")
let idade = parseInt(prompt("Qual a sua idade?"))
let peso = prompt("Qual o seu peso?")
let altura = prompt("Qual a sua altura?")
let profissao = prompt("Qual a sua profissao?")

console.log(" Olá " + nome +" vocé tem "+ idade + " anos, é "+ profissao+",tem "+altura+" de altura e pesa "+peso+"kg");

// VERIFICANDO IDADE DO USUÁRIO

if(idade >= 18){
    console.log("Vocé está liberado para tomar umas geladas");
}else{
   console.log("Sem geladas para vocé"); 
}
//  DESCOBRINDO IDADE FRACIONADA

let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365
console.log("Sua idade em meses é:" + meses)
console.log("Sua idade em semanas é:" + semanas)
console.log("Sua idade em dias é:" + dias)

let salarioAtual;

let confirmar = "n";
while(confirmar != "s"){
    
   salarioAtual = parseFloat(prompt("Digite seu salário atual"));
console.log(" salário atual:" + salarioAtual);
   confirmar = prompt("As informações estão corretas? (s/n)");
}

let aumentoAnual = 0.015;
console.log("Previsão salarial para os próximos 10 anos:");

for (let ano = 1; ano <= 10; ano++) {
    salarioAtual += salarioAtual * aumentoAnual;
    console.log((2023 + ano) + " = R$ " + salarioAtual.toFixed(2));
}

