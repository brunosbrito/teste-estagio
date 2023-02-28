// questão número 2

let numero = 5

let num1 = 0;
let num2 = 1;
let num3;

while (num2 < numero) {
  num3 = num1 + num2;
  num1 = num2;
  num2 = num3;
}

if (num2 == numero) {
  console.log(numero + " pertence à sequência de Fibonacci.");
} else {
  console.log(numero + " não pertence à sequência de Fibonacci.");
}


//questão número 3

const dados = require('./dados.json')

let arrayValor = dados.map(dados => dados.valor);
let faturamentoDiario = arrayValor.filter((valor) => valor !== 0)
console.log(faturamentoDiario)

let menorFaturamento = faturamentoDiario[0];
let maiorFaturamento = faturamentoDiario[0];

// Soma o faturamento mensal
let totalFaturamento = 0;
for (let i = 0; i < faturamentoDiario.length; i += 1) {
  totalFaturamento += faturamentoDiario[i];
}

// calcula a media mensal
let mediaMensal = totalFaturamento / faturamentoDiario.length;

let diasAcimaDaMedia = 0;

/* verifica o menor e o maior valor de faturamento ocorrido em um dia e o 
  número de dias no mes em que o faturamento diario foi maior */ 
for (let i = 0; i < faturamentoDiario.length; i++) {

  if (faturamentoDiario[i] < menorFaturamento) {
    menorFaturamento = faturamentoDiario[i];
  }
  if (faturamentoDiario[i] > maiorFaturamento) {
    maiorFaturamento = faturamentoDiario[i];
  }
 
  if (faturamentoDiario[i] > mediaMensal) {
    diasAcimaDaMedia++;
  }
}

console.log(`O menor valor de faturamento ocorrido em um dia do mês: ${menorFaturamento}`);
console.log(`O maior valor de faturamento ocorrido em um dia do mês: ${maiorFaturamento}`);
console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${diasAcimaDaMedia} `);


// questão 4

// cria objeto com os estados e faturamentos
const faturamentoPorEstado = {
  "SP": 67836.43,
  "RJ": 36678.66,
  "MG": 29229.88,
  "ES": 27165.48,
  "Outros": 19849.53
};

// calcula o valor total dos faturamentos mensais
const valorTotalMensal = Object.values(faturamentoPorEstado).reduce((acc, curr) => acc + curr, 0);

// calcula o porcentual de faturamento mensal de cada estado
const percentuaisPorEstado = {};
for (let estado in faturamentoPorEstado) {
  percentuaisPorEstado[estado] = `${(faturamentoPorEstado[estado] / valorTotalMensal).toFixed(2) * 100}% ` ;
  console.log()
}

console.log(percentuaisPorEstado);


// questão 5
function inverterString(str) {
  let novaString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    novaString += str[i];
  }
  return novaString;
}

console.log(inverterString('Bruno'))
