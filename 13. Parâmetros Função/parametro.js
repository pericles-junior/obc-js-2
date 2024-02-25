function dobro(x) {
  alert("O dobro de " + x + " é " + x * 2);
}

// dobro(5);
// dobro(7);

// dobro();

function dizerOla(name = "mundo") {
  alert("Hey, " + name + "!");
}

// dizerOla("Péricles Jr");
// dizerOla();

function soma(a, b) {
  alert("O resultado da soma é " + (a + b));
}

// soma(4, 5);

function criarUsuario(nome, email, senha, tipo = "admin") {
  const usuario = {
    nome, // mesmo que o nome: nome
    email,
    senha,
    tipo,
  };

  console.log(usuario);
}

function muitosParametros(
  nome,
  telefone,
  endereco,
  aniversario,
  email,
  senha
) {
  // ...
}

function objComoParametros(usuario) {
  // ...
  console.log(usuario);
}

muitosParametros(
  "nome",
  "telefone",
  "endereco",
  "aniversario",
  "email",
  "senha"
);

const dadosDoUsuario = {
  nome: "Péricles Jr",
  telefone: "123465789",
  email: "pericles@hotmail.com",
  senha: "132465",
  endereco: "dwqqw",
  aniversario: "28/01/2000",
};

objComoParametros(dadosDoUsuario);
