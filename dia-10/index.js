let nomes = [];
let continuar = true;
let posicaoDoArray = 0;

while(continuar === true){
   let nomeInserido = prompt('insera um nome');
   nomes[posicaoDoArray] = nomeInserido
   
   let desejaContinuar = prompt('Insira 1 caso deseje adicionar um novo nome')
   if(desejaContinuar != '1'){
    continuar = false;
    continue;
   }
   posicaoDoArray++;
}