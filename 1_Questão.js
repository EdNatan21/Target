// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

let Indice = 13;
let Soma = 0;
let K = 0;

while (K < Indice) {
  K++;
  Soma = Soma + K;
  console.log(Soma);
}
// Resultado = 1, 3, 6, 10, 15, 21, 28, 36
