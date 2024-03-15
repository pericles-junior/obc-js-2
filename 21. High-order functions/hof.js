// Função que recebe outra função como parâmetro
function calcular(a, b, operacao){
    console.log("Realizando uma operação.")
    const resultado = operacao(a, b) // somar(3, 5)
    return resultado
}

function somar(x, y){
    console.log("Realizando uma soma.")
    return x + y
}

calcular(3, 5, somar)

calcular(8, 4, )