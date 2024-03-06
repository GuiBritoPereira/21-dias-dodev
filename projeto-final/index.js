class ToDo{
    Texto
    Prioridade
    Feito = false

    constructor(texto, prioridade){
        this.Texto = texto
        this.Prioridade = prioridade
    }

        
}
    function CriarToDo(texto, prioridade, array){
        let objetoToDo = new ToDo(texto, prioridade)
        if(!array.some(x => x.texto == texto))
        array.push(objetoTodo)
    return objetoTodo
    }

    function AtualizarToDo(textoAntigo, textoNovo, array){
        let atualizado = false
        array.forEach(todo => {
        if(todo.Texto == textoAntigo){
            todo.texto = textoNovo
            atualizado = true
        }
            
        })
        return atualizado

    }

    function ConcluirToDo(array, texto){
        let concluido = false
        array.forEach(todo =>{
            if(todo.Texto == texto){
                if(todo.Feito)
                todo.Feito = false
            else {
                todo.Feito = true
            }
            concluido = true

            }

        })
        

    }
    function ExcluirToDo(array, texto){
        let index
        let removido = false
        array.forEach(todo =>{
            if(todo.Texto == texto){
              index = array.indexof(todo)
              removido = true
            }

        })
        array.slice(index, 1)
        return removido

}
    function PesquisarToDo(array, texto){
        let pesquisar = false
        array.forEach(todo =>{
         if(todo.Texto.includes(texto)){
            pesquisar = true
         }   
        })
        return pesquisar 

    }
    function OrdenarCrescente(array){
        array.sort((a, b) => a.Prioridade - b.Prioridade)
        return array

    }
    function OrdernarDecrescente(array){
        array.sort((a, b) => b.Prioridade - a.prioridade)
        return array
    }

            
        

    
