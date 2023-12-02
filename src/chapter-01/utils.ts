import { Invoice, Plays, Performance } from "./types";

export function usd(aNumber: number) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2,
	}).format(aNumber/100);
}

export function playFor(perf: Performance, plays: Plays) {
	return plays[perf.playID];
}

export function totalVolumeCredits(invoice: Invoice, plays: Plays) {
	let result = 0;
	for (let perf of invoice.performances) {
		result += volumeCreditsFor(perf, plays);
	}
	return result;
}

export function totalAmount(invoice: Invoice,  plays: Plays) {
	let result = 0;
	for (let perf of invoice.performances) {
		result += amountFor(perf, plays);
	}
	return result;
}

export function volumeCreditsFor(perf: Performance,  plays: Plays) {
	 // soma créditos por volume
	 let result = 0;
	 result += Math.max(perf.audience - 30, 0);

	 // soma um crédito extra para cada dez espectadores de comédia
	 if (playFor(perf, plays).type === "comedy") {
		result += Math.floor(perf.audience / 5);
	 }

	 return result;
}

export function amountFor(perf: Performance, plays: Plays) {
	let result = 0;

	switch(playFor(perf, plays).type) {
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
			throw new Error(`unknown type: ${playFor(perf, plays).type}`)
	}

	return result
}