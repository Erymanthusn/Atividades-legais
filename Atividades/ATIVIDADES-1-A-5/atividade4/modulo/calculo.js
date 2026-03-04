function validacao (numero1){

    let n1 = Number(numero1)

    if(isNaN(n1)){
        console.log('ERRO: digite valores validos para obter o resultado desejado')
        process.exit(0)
    }
}

function calcularFatorial(valor1) {

    // Converte o valor recebido para número
    let i = Number(valor1)

    // Variável acumuladora do resultado (começa com 1)
    let resultado = 1

    // Enquanto i for maior que 1
    // Multiplica o resultado por i e depois decrementa
   
    while (i > 1) {
        resultado *= i
        i--
    }

    // Exibe o resultado final do cálculo
    console.log(`O fatorial de ${valor1} é: ${resultado}`)

    // Encerra o programa imediatamente
    process.exit(0)
}

// Exporta as funções para serem usadas em outro arquivo
module.exports = {
    validacao,
    calcularFatorial
}