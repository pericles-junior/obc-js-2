function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}

const resultado = calcularMedia(8, 2);

console.log(resultado);

function criarProduto(descricao, preco) {
  const produto = {
    descricao, // nome: nome
    preco,
    estoque: 1,
  };

  return produto;
}

console.log(
  criarProduto("Notebook Intel Core i3 8GB", 2500)
);

function areaRetangular(base, altura) {
  const area = base * altura;
  return area;
}

function areaQuadrado(lado) {
  return areaRetangular(lado, lado);
}

// console.log(areaRetangular(3, 5));
// console.log(areaQuadrado(9));

function ola() {
  let texto = "...";
  texto = "Olá mundo!";
  return texto;
  console.log(texto);
}

console.log(ola());

function maioridade(idade) {
  idade >= 18
    ? (idade = "Maior de idade")
    : (idade = "Menor de idade");
  return idade;
}

console.log(maioridade(19));
console.log(maioridade(13));
