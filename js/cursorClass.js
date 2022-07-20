class Cursor {
    amount = 0;
    power;
    interval;
    costBase;
    costCoefficient;
    amountTextId;
    costTextId;
    maxBuyTextId;

    constructor(power, interval, costBase, costCoefficient, amountTextId, costTextId, maxBuyTextId) {
        this.amount = 0
        this.power = power;
        this.interval = interval;
        this.costBase = costBase;
        this.costCoefficient = costCoefficient;

        this.amountTextId = amountTextId;
        this.amountTextElement = document.getElementById(this.amountTextId);
        this.costTextId = costTextId;
        this.costTextElement = document.getElementById(this.costTextId);
        this.maxBuyTextId = maxBuyTextId;
        this.maxBuyTextElement = document.getElementById(this.maxBuyTextId);

        // main game loop
        setInterval(function() {
            console.log('Click from :' + this.amountTextId + ' (' + this.amount + ')')
            cookieClick(this.amount * this.power);
        }.bind(this), 1000 * this.interval);
    }

    cursorCost(n) {
    	if (n === 1) {
    		return Math.round(
        		this.costBase * Math.pow(this.costCoefficient, this.amount)
        	)
    	}
        return Math.round(
        	this.costBase * Math.pow(this.costCoefficient, this.amount) * 
        	(Math.pow(this.costCoefficient, n) - 1) / (this.costCoefficient - 1)
        );
    }

    buyCursor(n) {
        let cost = this.cursorCost(n);
        console.log()
        if (cookie >= cost) {
            this.amount = this.amount + n;
            cookie = cookie - cost;
            this.amountTextElement.innerHTML = this.amount;
            updateGui("cookie");
            updateGui("cookieRate");
        }
        let nextCost = this.cursorCost(1);
        this.costTextElement.innerHTML = nextCost;
    }

    buyMaxCursor() {
    	this.buyCursor(this.getMaxBuy())
    }

    getMaxBuy() {
		let n = cookie
		n *= (this.costCoefficient - 1)
		n /= this.costBase * Math.pow(this.costCoefficient, this.amount)
    	return Math.floor(
    		getBaseLog(this.costCoefficient, n + 1)
    	)
    }

    updateGui() {
        this.amountTextElement.innerHTML = this.amount;
        this.costTextElement.innerHTML = this.cursorCost(1);
    }

    updateGuiMaxBuy() {
        this.maxBuyTextElement.innerHTML = this.getMaxBuy();
    }

    getCookieRate() {
        return this.amount * (this.power / this.interval)
    }

    loadAmount(n) {
        this.amount = n
        this.updateGui()
    }
}
