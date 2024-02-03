let pilha = [];
let opcao = "";

do {
  opcao = prompt(
    "Quantidade de cartas no baralho: " +
      pilha.length +
      "\n" +
      "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const adicionarCarta = prompt(
        "Qual o nome da carta?"
      );
      pilha.push(adicionarCarta);
      break;
    case "2":
      const puxarCarta = pilha.shift();
      alert(puxarCarta + " foi puxada.");
      break;
    case "3":
      alert("Encerrando programa.");
      break;
    default:
      alert("Opção inválida. Tente novamente!");
      break;
  }
} while (opcao !== "3");
