// criando variaveis

let mediageral = 0;
let qtdHomens = 0;
let qtdMulherAcimaDe7 = 0;
let maiorNotaHomem = 0;
let contador = 1;

//nota e sexo

while(contador <= 5){
    nota = parseInt(prompt('Digite a nota do ' + contador + '* aluno'));
    sexo = prompt('Digite o sexo do aluno M/F');

    if(sexo == 'M'){
        if(nota > maiorNotaHomem){
            maiorNotaHomem = nota;
        }
        qtdHomens++;
    }
    if(sexo == 'F' && nota > 7){
        qtdMulherAcimaDe7++;
    } 
    mediageral += nota;
    contador++;
}

mediageral = mediageral / 10;

console.log('A média geral dos alunos foi: ' + mediageral);
console.log('A quantidade de homens cadastrados foi: ' + qtdHomens);
console.log('A quantidade de mulheres que tiveram nota acima de 7 foi: ' + qtdMulherAcimaDe7);
console.log('A maior nota entre os homens foi: ' + maiorNotaHomem);