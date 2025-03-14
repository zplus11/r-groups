export default class hasse {
	constructor(pairs) {
		this.pairs = pairs;
	}

	complement(U, A) {
		return new Set([...A].filter(x => !A.has(x)));
	}

	covers(x, y) {
		if (x === y || !this.pairs.includes([x, y])) {
			return false;
		}

		let checkset = this.complement(this.pairs, [x, y]);

		for (let i; i < checkset.length; i++) {
			if (this.pairs.includes([x, checkset[i]]) && this.pairs.includes([checkset[i], y])) {
				return false;
			}
		}

		return true;
	}

	covering() {
		return this.pairs.filter(pair => this.covers(pair[0], pair[1]));
	}
}
