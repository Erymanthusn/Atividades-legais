// importa a biblioteca
const readline = require('readline')

const calculo = require('./modulo/calculo.js')

// cria o objeto de entrada de dados
const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
  
                    entradaDados.question('Informe qual será o contador inicial (0 a 500): ', function(contInicial){
                        let contadorInic = contInicial
                          entradaDados.question('Informe qual será o contador final (1 a 500): ', function(contfinal){
                             let contadorFim = contfinal

                             entradaDados.question('Deseja ver a lista de numeros pares ou impares? (1 = PARES / 2 = IMPARES): ', function(escolha){
                                let escolhaParOuImpar = escolha

                         let validar = calculo.validacao(contadorInic, contadorFim, escolhaParOuImpar)
                        let resultado = calculo.calcularTabuada(contadorInic, contadorFim, escolhaParOuImpar)


                })
            })
        })
