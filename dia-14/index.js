// Função para perguntar nome e salário do colaboradores
var nome;
var salario;

function perguntarColaboradores() {
    nome = prompt("Digite o nome do colaborador:");
    salario = parseFloat(prompt("Digite o salario do colaborador:"));
    calcularAumentoSalario(nome, salario);
}

// Função para calcular o aumento do salário
function calcularAumentoSalario(nome, salario) {
    var aumento = 0;

    if (salario <= 1500) {
        aumento = 0.2; // 20%
    } else if (salario <= 2000) {
        aumento = 0.15; // 15%
    } else if (salario <= 3000) {
        aumento = 0.1; // 10%
    } else {
        aumento = 0.5; // 5%
    }

    var novoSalario = salario + (salario * aumento);

    // Exibindo os resultados
    console.log("Nome do colaborador: " + nome);
    console.log("Salário: R$ " + salario);
    console.log("Aumento: " + (aumento * 100) + "%");
    console.log("Salário reajustado: R$ " + novoSalario);

    perguntarNovamente(); // Perguntar se deseja calcular novamente
}

// Função para perguntar se o usuário deseja calcular novamente
function perguntarNovamente() {
    var resposta = prompt("Deseja calcular novamente? (s/n)");

    if (resposta.toLowerCase() === "s") {
        perguntarColaboradores(); // reiniciar o progresso
    } else {
        console.log("Programa encerrado");
    }
}

// Chamando a função para iniciar o programa
perguntarColaboradores();