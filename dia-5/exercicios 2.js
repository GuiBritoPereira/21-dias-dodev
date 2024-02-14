// criando variaveis 
let valor 
let quantidade
let opcao = prompt("Bem vindo a dodev-thru,voce deseja:"+
"\n1 - abastecer com gasolina; \n2 - abastecer com alcool; \n3 - calibrar os pneus;")


// criando switchcase

switch(opcao){
  case "1":
    valor = parseInt(prompt("digite o valor desejado para abastecer"))
    quantidade = valor / 5
    console.log("foram abastecidos" + quantidade + "L de gasolina")
    break;
    case "2":
    valor = parseInt(prompt("digite o valor desejado para abastecer"))
    quantidade = valor / 3
    console.log("foram abastecidos" + quantidade + "L de alcool")
    break;
    case "3":
    default:
      console.log("pneus calibrados com sucesso")
      break;



}

