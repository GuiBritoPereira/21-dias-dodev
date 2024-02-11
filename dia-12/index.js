// Passo 1: crie dois arrays para nomes e senhas

let nomes =[]
let senhas = []
let contador = 0

let continuar = true

while (continuar){
    let opcao = prompt("O que deseja fazer? 1 - Cadastro /  2 - Login / 3 - Excluir / 4 - Encerrar")

    switch (opcao){
        case "1":
            // Passo 2: Criando um cadastro de usuario

            nomes[contador] = prompt("Qual o nome?")
            senhas[contador] = prompt("Qual a senha")
            contador++

            break;

            case "2":
                // Passo 3: Criando login 
                        
                // Solicita ao usuário um nome e uma senha para login
                let nomeLogin = prompt("Qual o seu nome?");
                let senha = prompt("Qual a sua senha?");
                let loginValido = false;
            
                // Verifica se o nome e a senha inseridos correspondem a algum registro nos arrays "nomes" e "senhas"
                for (let i = 0; i < nomes.length; i++) {
                    if (nomeLogin == nomes[i] && senha == senhas[i]) {
                        loginValido = true;
                    }
                }
                
                // Exibe uma mensagem com base no resultado da verificação
                if (loginValido) {
                    alert("Login feito com sucesso. Bem-vindo!");
                } else {
                    alert("Login ou senha incorretos!");
                }
                break;

        

        case "3":
            // Passo 4: Criando Excluir]

            let nomeExcluir = prompt("Qual o nome que deseja excluir?")
            let nomesAux = []
            let senhasAux = []
            let contadorAux = 0

            for(let i = 0; i < contador; i++){
                if(nomeExcluir == nomes[i]){
                    alert("Cadastro excluído com sucesso")
                }else{
                    nomesAux[contadorAux] = nomes[i]
                    senhasAux[contadorAux] = senhas[1]
                    contadorAux++
                }
            }

            nomes = nomesAux
            senhas = senhasAux
            contador--

            break;

        case "4":
            continuar = false
            break;
        default:
            console.log("Opcao invalida, escolha outra!")
            break;    


            

            
    }
}