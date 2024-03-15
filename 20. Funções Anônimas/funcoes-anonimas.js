olaMundo()

function olaMundo() {
    console.log("Olá mundo!")
}

const oiMundo = function(){
    console.log("Oi, mundo!")
} // funções anônimas devem ser criadas antes da execução dela

oiMundo()

function somar (a, b){
    return a + b
}

let operacao = somar

console.log(operacao(4, 5))

operacao = function (a, b){
    return a - b
}

console.log(operacao(36, 20))