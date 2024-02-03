let filaDeEspera = [];
let opcao = "";

do {
  let pacientes = "";

  for (let i = 0; i < filaDeEspera.length; i++) {
    pacientes += i + 1 + "° - " + filaDeEspera[i] + "\n";
  }

  opcao = prompt(
    "Pacientes:\n" +
      pacientes +
      "\nEscolha uma ação:\n1. Novo paciente\n2. Consultar paciente\n3. Sair"
  );

  switch (opcao) {
    case "1":
      let nomeNovoPaciente = prompt(
        "Digite o nome do novo paciente:"
      );
      filaDeEspera.push(nomeNovoPaciente);
      alert(
        `Paciente "${nomeNovoPaciente}" adicionado à fila. Posição na fila: ${filaDeEspera.length}`
      );
      break;

    case "2":
      let pacienteConsultado = filaDeEspera.shift();
      if (pacienteConsultado) {
        alert(`Paciente consultado: ${pacienteConsultado}`);
      } else {
        alert(`Não há pacientes na fila.`);
      }
      break;

    case "3":
      alert("Saindo do programa.");
      // Finaliza o loop e encerra o programa
      exitProgram();
      break;
    default:
      1;
      alert("Opção inválida. Tente novamente!");
      break;
  }
} while (opcao !== "3" || opcao !== "sair");

function exitProgram() {
  // Encerra o programa
  // Aqui você pode adicionar outras ações de encerramento, se necessário
  // Por exemplo, salvar dados, exibir uma mensagem de despedida, etc.
  // Você pode adicionar código adicional conforme necessário.
  // No exemplo, apenas encerramos o loop infinito.
  throw new Error("Programa encerrado.");
}
