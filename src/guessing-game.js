class GuessingGame {
    constructor() {

	}

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	return this.res = Math.ceil(this.min + (this.max - this.min)/2);
    }

    lower() {
    	this.setRange(this.min, this.res);
    }

    greater() {
    	this.setRange(this.res, this.max);
    }
}

module.exports = GuessingGame;
