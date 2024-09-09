// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// Estou solicitando o valor pelo terminal em node.js
const prompt = require('prompt-sync')();
usuario = parseInt(prompt('Digite um valor: '));

// A função verifica e responde sobre a igualdade dos valores
function Fibonacci(usuario) {
  let valor1 = 0;
  let valor2 = 1;
  let valor3 = 0;

  if (usuario == 0 || usuario == 1) {
    console.log('Número está na sequência de Fibonacci');
    return;
  }

  while (valor3 < usuario) {
    valor3 = valor1 + valor2;
    valor1 = valor2;
    valor2 = valor3;
  }

  if (valor3 === usuario) {
    console.log('Número está na sequência de Fibonacci');
  } else {
    console.log('Número não está na sequência de Fibonacci');
  }
}

// Chamei a função.
Fibonacci(usuario);
