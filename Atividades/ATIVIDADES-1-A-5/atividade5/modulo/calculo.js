function validacao (n3, n4, escolha){

    let valor3 = Number(n3)
    let valor4 = Number(n4)
    let opcao = Number(escolha)


    if(isNaN(valor3) ||  isNaN(valor4) || isNaN(opcao))
    {
        console.log ('ERRO: os dados recebidos contem letras escreva novamente com números')
        process.exit(0)
    } else if (valor3 >= valor4){
        console.log ('ERRO: com os dados recebidos não sera possivel realizar a contagem')
        process.exit(0)
    } else if (valor3 < 0 || valor3 > 500 || valor4 <1 || valor4 >500 || opcao <=0 || opcao >=4){
        console.log ('ERRO: com os dados recebidos não sera possivel realizar a contagem')
        process.exit(0)
    }
    

}

function calcularTabuada (valor3, valor4, escolha){

    let listaPares = new Set()
    let listaImpares = new Set()
    let opcao = escolha
    
    let contInicial = Number(valor3)
    let contFinal   = Number(valor4)
    
        while(contInicial <= contFinal){
            console.log(contInicial)
            if (contInicial % 2 === 0) {
                listaPares.add(contInicial)
            } else {
                listaImpares.add(contInicial)
            }
            contInicial++
            
        }
        if (opcao == 1) {
            console.log('--------------------------------------------')
            console.log('Números pares:')
            console.log('--------------------------------------------')
            console.log(listaPares)
            console.log('--------------------------------------------')
    
        } else if (opcao == 2) {
            console.log('--------------------------------------------')
            console.log('Números ímpares:')
            console.log('--------------------------------------------')
            console.log(listaImpares)
            console.log('--------------------------------------------')
    
        } else {
            console.log('--------------------------------------------')
            console.log('Números pares:')
            console.log('--------------------------------------------')
            console.log(listaPares)
            console.log('--------------------------------------------')
            console.log('Números ímpares:')
            console.log('--------------------------------------------')
            console.log(listaImpares)
            console.log('--------------------------------------------')
        }
    
        process.exit(0)
    }
       
module.exports = {
    calcularTabuada,
    validacao
}

