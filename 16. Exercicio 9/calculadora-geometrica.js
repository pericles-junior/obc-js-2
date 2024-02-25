function areaTriangulo() {
  const base = parseFloat(
    prompt("Informe a base do triângulo:")
  );
  const altura = parseFloat(
    prompt("Informe a altura do triângulo:")
  );
  return (base * altura) / 2;
}

function areaRetangulo() {
  const base = parseFloat(
    prompt("Informe a base do retângulo:")
  );
  const altura = parseFloat(
    prompt("Informe a altura do retângulo:")
  );
  return base * altura;
}

function areaQuadrado() {
  const lado = parseFloat(
    prompt("Informe a área do quadrado:")
  );
  return lado * lado;
}

function areaTrapezio() {
  const baseMenor = parseFloat(
    prompt("Informe a base menor do trapézio:")
  );
  const baseMaior = parseFloat(
    prompt("Informe a base maior do trapézio:")
  );
  const altura = parseFloat(
    prompt("Informe a altura do trapézio:")
  );
  return ((baseMaior + baseMenor) * altura) / 2;
}

function areaCirculo() {
  const raio = parseFloat(
    prompt("Informe o raio do círculo:")
  );
  return 3.14 * raio ** 2;
}

let opcao = "";

while (opcao !== "6") {
  opcao = prompt(
    "Bem-vindo a Calculora Geométrica!\n\n" +
      "Escolha uma opção:\n1. Calcular área do triângulo\n2. Calcular área do retângulo" +
      "\n3. Calcular área do quadrado\n4. Calcular área do trapézio\n5. Calcular área do círculo\n6. Sair da calculadora"
  );

  switch (opcao) {
    case "1":
      alert(
        "A área do triângulo é igual a " + areaTriangulo()
      );
      break;
    case "2":
      alert(
        "A área do retângulo é igual a " + areaRetangulo()
      );
      break;
    case "3":
      alert(
        "A área do quadrado é igual a " + areaQuadrado()
      );
      break;
    case "4":
      alert(
        "A área do trapézio é igual a " + areaTrapezio()
      );
      break;
    case "5":
      alert("A área do círculo é igual a " + areaCirculo());
      break;
    case "6":
      alert("Encerrando o programa... Até a próxima!");
      break;
    default:
      alert("Opção inválida, tente novamente!");
      break;
  }
}
