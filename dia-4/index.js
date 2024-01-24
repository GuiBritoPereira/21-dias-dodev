
// == igual | != diferente | < menor que | > maior que | <=  menor ou igual >= maior ou igual
// ===  é igual o valor e o tipo | !== é diferente o valor e o tipo

let idade = Number(prompt('Qual a sua idade'))
let nome = prompt('Qual o seu nome')

if (idade === 18 && nome === 'Guilherme'){
  console.log('seu nome é guilherme e voce tem 18 anos')
}else if(idade ===18 |nome === 'Guilherme'){
  console.log('voce tem 18 anos OU seu nome é Guilherme')
}else{
  console.log('seu nome não é Guilherme e voce nao tem 18 anos')
}
  

