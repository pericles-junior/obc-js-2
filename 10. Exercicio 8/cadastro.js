let imoveis = [];
let menu = "";

while (menu !== "3") {
  menu = prompt(
    "Bem-vindo(a) ao Cadastro de Imóveis!\n" +
      "Total de Imóveis: " +
      imoveis.length +
      "\n\nEscolha uma opção:\n1. Salvar imóvel\n2. Mostrar imóveis salvos\n3. Sair"
  );

  switch (menu) {
    case "1":
      const imovel = {
        nomeProprietario: prompt(
          "Digite o nome do proprietário:"
        ),
        qtdQuartos: parseInt(
          prompt("Digite a quantidade de quartos:")
        ),
        qtdBanheiros: parseInt(
          prompt("Digite a quantidade de banheiros:")
        ),
        garagem: prompt(
          "O imóvel possui uma garagem? (Sim/Não)"
        ),
      };

      const confirmacao = confirm(
        "Salvar este imóvel?\n" +
          "\nProprietário: " +
          imovel.nomeProprietario +
          "\nQuartos: " +
          imovel.qtdQuartos +
          "\nBanheiros: " +
          imovel.qtdBanheiros +
          "\nPossui garagem? " +
          imovel.garagem
      );

      if (confirmacao) {
        imoveis.push(imovel);
        alert("Imóvel salvo com sucesso!");
      } else {
        alert("Voltando ao menu.");
      }
      break;
    case "2":
      if (imoveis.length === 0) {
        alert("Não há imóvel cadastrado!");
      } else {
        for (let i = 0; i < imoveis.length; i++) {
          alert(
            "Imóvel " +
              (i + 1) +
              "\nProprietário: " +
              imoveis[i].nomeProprietario +
              "\nQuartos: " +
              imoveis[i].qtdQuartos +
              "\nBanheiros: " +
              imoveis[i].qtdBanheiros +
              "\nPossui garagem? " +
              imoveis[i].garagem
          );
        }
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida. Tente novamente!");
      break;
  }
}
