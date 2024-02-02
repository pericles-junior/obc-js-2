let filaDeEspera = []

while(true) {
    let escolha = prompt("Menu:\n1. Novo paciente\n2. Consultar paciente\n3. Sair")

    switch(escolha){
        case "1":
            let nomeNovoPaciente = prompt("Digite o nome do novo paciente:")
            filaDeEspera.push(nomeNovoPaciente)
            alert(`Paciente "${nomeNovoPaciente}" adicionado à fila. Posição na fila: ${filaDeEspera.length}`)
            break

        case "2":
            if (filaDeEspera === 0) {
                alert("Não há pacientes na fila.")
            } else {
                let pacienteConsultado = filaDeEspera.shift()
                alert(`Paciente consultado: ${pacienteConsultado}`)
            }
            break

        case "3":
            alert("Saindo do programa.")
            // Finaliza o loop e encerra o programa
            exitProgram()
            break
        default:1
            alert("Opção inválida. Tente novamente!")
            break
    }
}

function exitProgram() {
    // Encerra o programa
    // Aqui você pode adicionar outras ações de encerramento, se necessário
    // Por exemplo, salvar dados, exibir uma mensagem de despedida, etc.
    // Você pode adicionar código adicional conforme necessário.
    // No exemplo, apenas encerramos o loop infinito.
    throw new Error("Programa encerrado.");
}
