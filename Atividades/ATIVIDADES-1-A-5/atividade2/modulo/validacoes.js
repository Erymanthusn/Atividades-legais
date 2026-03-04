function validarString(nomeA, nomeP, sexoA, sexoP, curso, disciplina) {

    let primeiroNome = nomeA
    let segundoNome = nomeP
    let primeiroSexo = sexoA
    let segundoSexo = sexoP
    let curso1 = curso
    let disciplina1 = disciplina

    if (primeiroNome == '' || segundoNome == '' || primeiroSexo == '' || segundoSexo == '' || curso1 == '' || disciplina1 == '') 
    {

        console.log('ERRO: Os valores solicitados não foram preenchidos ou são invalidos')
        process.exit(0);

    } else if (!isNaN(primeiroNome) || !isNaN(segundoNome) || !isNaN(segundoSexo) || !isNaN(primeiroSexo) || !isNaN(curso1) || !isNaN(disciplina1)) 
    {

        console.log('ERRO: os valores estao incorretos')
        process.exit(0)

    } else {
        return true
    }
}


function validacoes(entrada1, entrada2, entrada3, entrada4) {

    entrada1 = Number(String(entrada1).replace(',', '.'))
    entrada2 = Number(String(entrada2).replace(',', '.'))
    entrada3 = Number(String(entrada2).replace(',', '.'))
    entrada4 = Number(String(entrada2).replace(',', '.'))

    let valor1 = entrada1
    let valor2 = entrada2
    let valor3 = entrada3
    let valor4 = entrada4

    if (valor1 == '' || valor2 == '' || valor3 == '' || valor4 == '' || isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)) 
    {

        console.log('ERRO: Os valores solicitados não foram preenchidos ou são invalidos')
        process.exit(0);

    } else {
        return true
    }
}


module.exports = {
    validacoes,
    validarString
}