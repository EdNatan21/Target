// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

let faturamentoMensal = [
  {
    estado: 'SP',
    valor: 67836.43,
  },
  {
    estado: 'RJ',
    valor: 36678.66,
  },
  {
    estado: 'MG',
    valor: 29229.88,
  },
  {
    estado: 'ES',
    valor: 27165.48,
  },
  {
    estado: 'OUTROS',
    valor: 19849.53,
  },
];

// Todos os valores
const todosValores = faturamentoMensal.map((item) => item.valor);

// Total dos valores
const total = todosValores.reduce((tot, i) => tot + i, 0);

// Percentual de cada estado
const percentualEstado = faturamentoMensal.map((obj) => {
  let percentual = (obj.valor / total) * 100;
  return { estado: obj.estado, percentual: percentual.toFixed(2) + '%' };
});

// Todos os percentuais
percentualEstado.forEach((item) => {
  console.log(`${item.estado} – ${item.percentual}`);
});
