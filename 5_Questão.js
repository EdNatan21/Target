// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

let a = 'amor';

// Função para inverter
function inverter(texto) {
  let b = '';

  // Percorre a variável de trá pra frente
  for (let i = texto.length - 1; i >= 0; i--) {
    b += texto[i];
  }

  return b;
}

console.log(inverter(a));
