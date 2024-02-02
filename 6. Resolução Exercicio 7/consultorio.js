let fila = []
let opcao = ""

do {
    let pacientes = ""
    for (let indice  = 0; indice < fila.length; indice++){
        pacientes += indice + 1 + "° - " + fila[indice] + "\n" 
    }

    opcao = prompt(
        "Pacientes:\n" + pacientes +
        "\nMenu\n1. Novo paciente\n2. Consultar paciente\n3. Sair")
    
    switch (opcao) {
        case "1":
            const novoPaciente = prompt("Qual é o nome do paciente?")
            fila.push(novoPaciente)
            break
        case "2":
            const pacienteConsultado = fila.shift()
            alert(pacienteConsultado + " foi consultado.")
            break
        case "3":
            alert("Programa encerrado.")
            break
        default:
            alert("Opção inválida. Tente novamente!")
            break
    }
} while (opcao !== "3")