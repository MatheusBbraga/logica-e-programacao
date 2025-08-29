function somarDoisNumeros(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDeDoisNumeros(valor1, valor2) {
    // 1. Soma todos os valores
    const resultadoSomaDeDoisValores = somarDoisNumeros(valor1, valor2);

    // 2. Divide pela quantidade de números passados
    const resultadoDaMediaDeDoisValores = resultadoSomaDeDoisValores / 2;

    //3. Retornar o resultado
    return  resultadoDaMediaDeDoisValores;

}


function somarTresNumeros(valor1, valor2, valor3) {
    const resultado = valor1 + valor2 + valor3;
    return resultado;
}


function somarTresNumeros(valor1, valor2, valor3) {
   // 1. Soma todos os valores
   const resultadoSomaTresValores = valor1 + valor2 + valor3;

   // 2. Divide pela quantidade de números passados
   const resultadoDaMediaDeTresValores = resultadoSomaTresValores / 3;

   // 3. Retorna o resultado 
   return resultadoDaMediaDeTresValores;
}

module.exports = {
    somarDoisNumeros
}