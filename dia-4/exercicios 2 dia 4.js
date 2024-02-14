// 1.1 - Solicitar informações do usuário
let nome = prompt("Digite seu nome:");
let idade = parseInt(prompt("Digite sua idade:"));
let possuiCarta = prompt("Você possui carta de motorista? (Digite 'sim' ou 'nao')").toLowerCase();
let possuiCarro = prompt("Você possui algum carro? (Digite 'sim' ou 'nao')").toLowerCase();

// 1.2 - Verificar se o usuário não é maior de idade ou não possui carta
if (idade < 18 || possuiCarta !== 'sim') {
    console.log(nome + ", você não pode dirigir.");
} else if (idade >= 18 && possuiCarta === 'sim' && possuiCarro !== 'sim') {
    // 1.3 - Se o usuário é maior de idade, possui carta, mas não possui carro
    console.log(nome + ", você pode dirigir, mas não tem um carro.");
} else {
    // 1.4 - Se o usuário é maior de idade, possui carta e carro
    console.log(nome + ", você será o motorista!");
}