let saldo = 1000;  // Inicializando o saldo com um valor (pode ser ajustado conforme necessário)

do {
    // Solicitar informações do cliente
    let nome = prompt('Digite o nome do cliente:');
    let cpf = prompt('Digite o CPF do cliente:');
    
    // Perguntar o valor
    let valor = parseFloat(prompt('Digite o valor:'));
    
    // Validar se o valor é positivo
    if (valor < 0) {
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
    
    // Perguntar se o usuário deseja continuar
    let continuar = prompt('Deseja continuar?\n1 - Sim\n2 - Parar');
    
    if (continuar !== '1') {
        break;
    }
    
} while (true);

// Exibir saldo total
console.log(`Saldo total: R$${saldo}`);

// Exibir o maior valor inserido
console.log(`Maior valor inserido: R$${Math.max(valor)}`);

// Exibir a média dos valores inseridos
let media = (saldo / valor).toFixed(2);
console.log(`Média dos valores inseridos: R$${media}`);