// CRIANDO VARIÁVEIS 

    let array = []
    let arrayInvertido = []

    // POPULANDO ARRAY
    for (let i = 0; i < 5; i++){
       let numero = parseInt(prompt("Digite o "+ (i + i) + " número"))
       array[i] = numero 
    }
    console.log("Array original: " + array)

    // INVERTENDO ARRAY
    let contador = 4
    for (let i = 0; i < 5; i++){
       arrayInvertido[i] = array[contador]
       contador-- 
    }
    console.log("array invertido:" + arrayInvertido)