import { Invoice, Plays, Performance } from "./types";

const refactoredStatement = (invoice: Invoice, plays: Plays) => {
  let totalAmount = 0;
  let volumeCredits = totalVolumeCredits();
  let result = `Statement for ${invoice.customer}\n`;

  for (let perf of invoice.performances) {
    // exibe a linha para esta requisição
    result += `   ${playFor(perf).name}: ${usd(amountFor(perf)/100)} (${perf.audience} seats)\n`;
    totalAmount +=  amountFor(perf);
  }

  result += `Amount owed is ${usd(totalAmount/100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;
  return result;

  function usd(aNumber: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber);
  }

  function playFor(perf: Performance) {
    return plays[perf.playID];
  }

  function totalVolumeCredits() {
    let result = 0;
    for (let perf of invoice.performances) {
      result += volumeCreditsFor(perf);
    }
    return result;
  }

  function volumeCreditsFor(perf: Performance) {
     // soma créditos por volume
     let result = 0;
     result += Math.max(perf.audience - 30, 0);

     // soma um crédito extra para cada dez espectadores de comédia
     if (playFor(perf).type === "comedy") {
      result += Math.floor(perf.audience / 5);
     }

     return result;
  }

  function amountFor(perf: Performance) {
    let result = 0;

    switch(playFor(perf).type) {
      case "tragedy":
        result = 40000;
        if(perf.audience > 30) {
          result += 1000 * (perf.audience - 30);
        }
        break;
      case "comedy": {
        result = 30000
        if(perf.audience > 20) {
          result += 10000 + 500 * (perf.audience - 20);
        }
        result += 300 * perf.audience;
        break;
      }
      default:
        throw new Error(`unknown type: ${playFor(perf).type}`)
    }

    return result
  }
};

export default refactoredStatement;