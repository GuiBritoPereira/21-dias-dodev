let saldo = 1000;  // Inicializando o saldo com um valor (pode ser ajustado conforme necessário)
let valoresInseridos = []; // Array para armazenar os valores inseridos

do {
    // Solicitar informações do cliente
    let nome = prompt('Digite o nome do cliente:');
    let cpf = prompt('Digite o CPF do cliente:');

    // Perguntar o valor
    let valor = parseFloat(prompt('Digite o valor:'));

    // Validar se o valor é positivo
    if (valor < 0 || isNaN(valor)) { // Verifica se o valor é negativo ou não é um número
        alert('Valor inválido. Insira um valor positivo.');
        continue;
    }

    // Oferecer opção de saque ou depósito
    let opcao = prompt('Escolha a opção:\n1 - Saque\n2 - Depósito');

    switch (opcao) {
        case '1':  // Saque
            if (valor > saldo) {
                alert('Saldo insuficiente. Não é possível realizar o saque.');
            } else {
                saldo -= valor;
                alert(`Saque de R$${valor} realizado com sucesso.`);
            }
            break;

        case '2':  // Depósito
            saldo += valor;
            alert(`Depósito de R$${valor} realizado com sucesso.`);
            break;

        default:
            alert('Opção inválida.');
    }

    valoresInseridos.push(valor); // Adiciona o valor inserido ao array

    // Perguntar se o usuário deseja continuar
    let continuar = prompt('Deseja continuar?\n1 - Sim\n2 - Parar');

    if (continuar !== '1') {
        break;
    }

} while (true);

// Exibir saldo total
console.log(`Saldo total: R$${saldo}`);

// Exibir o maior valor inserido
let maiorValorInserido = Math.max(...valoresInseridos); // Encontra o maior valor inserido
console.log(`Maior valor inserido: R$${maiorValorInserido}`);

// Exibir a média dos valores inseridos
let totalValores = valoresInseridos.length;
let somaValores = valoresInseridos.reduce((acc, curr) => acc + curr, 0); // Soma os valores inseridos
let media = (somaValores / totalValores).toFixed(2); // Calcula a média
console.log(`Média dos valores inseridos: R$${media}`);
