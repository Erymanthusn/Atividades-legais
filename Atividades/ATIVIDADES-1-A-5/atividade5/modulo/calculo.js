function validacao (n1, n2, n3, n4){

    let valor1 = Number(n1)
    let valor2 = Number(n2)
    let valor3 = Number(n3)
    let valor4 = Number(n4)

    if(isNaN(valor3) ||  isNaN(valor4))
    {
        console.log ('ERRO: os dados recebidos contem letras escrva novamente com números')
        process.exit(0)
    } else if (valor3 >= valor4){
        console.log ('ERRO: com os dados recebidos não sera possivel realizar a contagem')
        process.exit(0)
    } else if (valor3 < 0 || valor3 > 500 || valor4 <1 || valor4 >500){
        console.log ('ERRO: com os dados recebidos não sera possivel realizar a contagem')
        process.exit(0)
    }
    

}

function calcularTabuada (valor3, valor4){

    let listaPares = new Set()
    let listaImpares = new Set()
    
    let contInicial = Number(valor3)
    let contFinal   = Number(valor4)
    
        while(contInicial <= contFinal){
            console.log(contInicial)
            contInicial++
            if (resultado %2 ===0){
                listaPares.add(resultado)
            } if (resultado %2 !== 0){
                listaImpares.add(resultado)
            }
        }
        console.log('Números pares encontrados:')
        console.log(listaPares)
        console.log('-------------------------------------------------------------')
        console.log('Números ipares encontrados:')
        console.log(listaImpares)
        process.exit(0)
    }
       
module.exports = {
    calcularTabuada,
    validacao
}