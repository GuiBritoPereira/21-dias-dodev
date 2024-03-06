class Livros {
    Titulo
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade = true

    constructor(titulo, autor, editora, anoDePublicacao){

        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoDePublicacao = anoDePublicacao


    }

}

// CRIANDO OBJETOS DE CLASSE LIVRO

    let livros = []
    livros.push(new Livros("livros1", "marcos", "editora A", 2001))
    livros.push(new Livros("livros2", "marcos", "editora F", 1997))
    livros.push(new Livros("livros3", "carlos", "editora A", 2010 ))
    livros.push(new Livros("livros4", "joão", "editora A", 2005))
    livros.push(new Livros("livros5", "fabio", "editora C", 2020))

    class Biblioteca{
        Nome
        Endereco
        Telefone
        AcervoLivros

        constructor(nome, endereco, telefone, acervo){
            this.Nome = nome
            this.Endereco = endereco
            this.Telefone = telefone
            this.AcervoLivros = acervo
        }


        BuscarLivroPeloTitulo(titulo){

            this.AcervoLivros.array.forEach(livros => {
                if(livros.Titulo == titulo){
                    console.log(livros)
                }
                
            })
        }

        EmprestarLivro(titulo){

        let emprestado = false
        this.AcervoLivros.forEach( Livros => {
            if(livros.Titulo == titulo){
                if(livros.Disponibilidade == true){
                    livros.Disponibilidade = false
                    emprestado = true
                    }
                }
            
            })
            if(emprestado){
                return true
            }else{
                return false
            }
        }

        DevolverLivros(titulo){
            livros.forEach(livros =>{
                if(livros.Titulo == titulo){
                    livros.Disponibilidade == true
                    console.log("Livro devolvido")
                }

            })

        }


    }

    let biblioteca = new Biblioteca("Biblioteca DoDev", "12345", "Rua2")

    biblioteca.BuscarLivroPeloTitulo("livro2")
    biblioteca.EmprestarLivro("livro1")
    biblioteca.DevolverLivros("livro1")



    