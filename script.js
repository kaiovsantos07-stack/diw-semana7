// simulador de orçamento pessoal

function pedirNumero(msg) {
  let val;
  while (true) {
    let entrada = prompt(msg);
    val = Number(entrada);
    if (!isNaN(val) && entrada !== null && entrada.trim() !== "") break;
    alert("Digite um número válido!");
  }
  return val;
}

let nome = prompt("Qual seu nome?") || "Usuário";
let renda = pedirNumero("Qual sua renda mensal? (R$)");

let qtd = pedirNumero("Quantas despesas você quer lançar? (1 a 5)");
if (qtd < 1) qtd = 1;
if (qtd > 5) qtd = 5;

let total = 0;
for (let i = 1; i <= qtd; i++) {
  let v = pedirNumero("Despesa " + i + ": (R$)");
  total += v;
}

let sobra = renda - total;
let msg;

if (total > renda) {
  msg = "⚠️ Atenção: você gastou mais do que ganhou.";
} else if (sobra / renda >= 0.3) {
  msg = "✅ Ótimo: boa margem de sobra.";
} else {
  msg = "🙂 Ok: dá para melhorar a sobra.";
}

let resultado =
  "Relatório - " + nome + "\n" +
  "Renda: R$ " + renda.toFixed(2) + "\n" +
  "Despesas: R$ " + total.toFixed(2) + "\n" +
  "Sobra: R$ " + sobra.toFixed(2) + "\n\n" +
  msg;

alert(resultado);

console.log("===== Orçamento de " + nome + " =====");
console.log("Renda:    R$ " + renda.toFixed(2));
console.log("Despesas: R$ " + total.toFixed(2));
console.log("Sobra:    R$ " + sobra.toFixed(2));
console.log(msg);