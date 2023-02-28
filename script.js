// questão número 2

const ENTRADA_1 = 5

let num1 = 1;
let num2 = 1;
let num3;

while (num2 < ENTRADA_1) {
  num3 = num1 + num2;
  num1 = num2;
  num2 = num3;
}

if (num2 === ENTRADA_1) {
  console.log(ENTRADA_1 + " pertence à sequência de Fibonacci.");
} else {
  console.log(ENTRADA_1 + " não pertence à sequência de Fibonacci.");
}


//questão número 3

const data = require('./dados.json')

const arrayValue = data.map(data => data.valor);
const dailyBilling = arrayValue.filter(value => value !== 0)

// Soma o faturamento mensal
let totalBilling = 0;

const DAILY_BILLING_LENGTH = dailyBilling.length;

for (let i = 0; i < DAILY_BILLING_LENGTH; i += 1) {
  totalBilling += dailyBilling[i];
}

// calcula a media mensal
const monthlyMedia = totalBilling / dailyBilling.length;

/* verifica o menor e o maior valor de faturamento ocorrido em um dia e o 
  número de dias no mes em que o faturamento diario foi maior */ 

let lowerBilling = dailyBilling[0];
let higherBilling = dailyBilling[0];

let aboveAverageDays = 0;

for (let i = 0; i < DAILY_BILLING_LENGTH; i += 1) {

  const BILLING = dailyBilling[i]

  if (BILLING < lowerBilling) {
    lowerBilling = dailyBilling[i];
  }
  if (BILLING > higherBilling) {
    higherBilling = dailyBilling[i];
  }
 
  if (BILLING > monthlyMedia) {
    aboveAverageDays += 1;
  }
}

console.log(`O menor valor de faturamento ocorrido em um dia do mês: ${lowerBilling}`);
console.log(`O maior valor de faturamento ocorrido em um dia do mês: ${higherBilling}`);
console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${aboveAverageDays} `);


// questão 4

// cria objeto com os estados e faturamentos
const BILLING_PER_STATE = {
  "SP": 67836.43,
  "RJ": 36678.66,
  "MG": 29229.88,
  "ES": 27165.48,
  "Outros": 19849.53
};

// calcula o valor total dos faturamentos mensais
const VALUES_PER_STATE = Object.values(BILLING_PER_STATE);

const TOTAL_VALUES = VALUES_PER_STATE.reduce((acc, curr) => acc + curr, 0);

// calcula o porcentual de faturamento mensal de cada estado
const PERCENTAGES_BY_STATE = {};

for (let state in BILLING_PER_STATE) {

  const STATE_BILLING = BILLING_PER_STATE[state];
  const PERCENTAGES = (STATE_BILLING / TOTAL_VALUES).toFixed(2) * 100;

  PERCENTAGES_BY_STATE[state] = ` ${PERCENTAGES}% `; 
}

console.log(PERCENTAGES_BY_STATE);


// questão 5
function reverseString(str) {

  let newString = '';
  const STRING_LENGTH = str.length;

  for (let i = STRING_LENGTH - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

console.log(reverseString('Bruno'))
