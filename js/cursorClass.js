class Cursor {
    name;
    amount = 0;
    powerBase;
    power;
    interval;
    costBase;
    costCoefficient;
    div;

    constructor(name, powerBase, interval, costBase, costCoefficient, divId) {
        this.name = name

        this.amount = 0
        this.powerBase = powerBase;
        this.updatePower()
        this.interval = interval;
        this.costBase = costBase;
        this.costCoefficient = costCoefficient;

        this.div = document.getElementById(divId);
        this.amountTextElement = this.div.getElementsByClassName('amount')[0];
        this.rateTextElement = this.div.getElementsByClassName('rate')[0];
        this.contributionTextElement = this.div.getElementsByClassName('contribution')[0];
        this.costTextElement = this.div.getElementsByClassName('cost')[0];
        this.maxBuyTextElement = this.div.getElementsByClassName('maxBuy')[0];

        this.barElement = this.div.querySelector('.progress .bar');

        // main game loop
        setInterval(function() {
            if (0 < this.amount) {
            	cookieClick(this.amount * this.power);
            }
        }.bind(this), 1000 * this.interval);

        // progress bar
        let width = 0
        setInterval(function() {
            if (0 < this.amount) {
                width += 1;
                this.barElement.style.width = width + '%';
                this.barElement.innerHTML = width + '%';
                if (100 <= width) {
                    width = 0;
                }
            }
            else {
                width = 0;
                this.barElement.style.width = '0%';
                this.barElement.innerHTML = '0%';
            }
        }.bind(this), 1000 * this.interval / 100);
    }

    updatePower() {
        this.power = Math.floor(this.powerBase * (1 + muffin * muffinPower));
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
        if (n <= 0) {return true;}

        let cost = this.cursorCost(n);
        if (cost <= cookie) {
            this.amount = this.amount + n;
            cookie = cookie - cost;
            updateGui("cookie");
            updateGui("cookieRate");
            notify.buyCursor(n, this.name)
        } else {
            notify.buyCursorFail()
        }
        let nextCost = this.cursorCost(1);
        updateGui()
    }

    getMaxBuy() {
		let n = cookie
		n *= (this.costCoefficient - 1)
		n /= this.costBase * Math.pow(this.costCoefficient, this.amount)
    	return Math.floor(
    		getBaseLog(this.costCoefficient, n + 1)
    	)
    }

    buyMaxCursor() {
    	this.buyCursor(this.getMaxBuy())
    }

    updateGui() {
        this.amountTextElement.innerHTML = integerFormat(this.amount);
        this.costTextElement.innerHTML = integerFormat(this.cursorCost(1));
        this.rateTextElement.innerHTML = '+' + integerFormat(this.power) + ' Cookies / ' + this.interval + 's';
        this.contributionTextElement.innerHTML = percentageFormat(this.getContribution())
    }

    updateGuiMaxBuy() {
        this.maxBuyTextElement.innerHTML = this.getMaxBuy();
    }

    getCookieRate() {
        return this.amount * (this.power / this.interval)
    }

    getContribution() {
        return this.getCookieRate() / getCookieRate()
    }

    loadAmount(n) {
        this.amount = n
        this.updateGui()
    }

    prestige() {
        this.loadAmount(0)
        this.updatePower()
    }
}
