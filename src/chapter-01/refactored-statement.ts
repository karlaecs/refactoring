import { Invoice, Plays } from "./types";
import { amountFor, playFor, totalAmount, totalVolumeCredits, usd } from "./utils";

const refactoredStatement = (invoice: Invoice, plays: Plays) => {
  let result = `Statement for ${invoice.customer}\n`;

  for (let perf of invoice.performances) {
    // exibe a linha para esta requisição
    result += `   ${playFor(perf, plays).name}: ${usd(amountFor(perf, plays))} (${perf.audience} seats)\n`;
  }

  result += `Amount owed is ${usd(totalAmount(invoice, plays))}\n`;
  result += `You earned ${totalVolumeCredits(invoice, plays)} credits\n`;
  return result;
};

export default refactoredStatement;