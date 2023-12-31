export interface Play {
  name: string;
  type: string
}

export type Plays = Record<string, Play>

export interface Customer {
	customer: string
}

export interface Performance {
	playID: string
	audience: number
}

export interface Invoice {
	customer: string
	performances: Performance[]
}
