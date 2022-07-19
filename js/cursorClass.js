class Cursor {
    amount = 0;
    power;
    interval;
    costBase;
    costCoefficient;
    amountTextId;
    costTextId;

    constructor(power, interval, costBase, costCoefficient, amountTextId, costTextId) {
        this.amount = 0
        this.power = power;
        this.interval = interval;
        this.costBase = costBase;
        this.costCoefficient = costCoefficient;

        this.amountTextId = amountTextId;
        this.amountTextElement = document.getElementById(this.amountTextId);
        this.costTextId = costTextId;
        this.costTextElement = document.getElementById(this.costTextId);

        // main game loop
        setInterval(function() {
            console.log('Click from :' + this.amountTextId + ' (' + this.amount + ')')
            cookieClick(this.amount * this.power);
        }.bind(this), 1000 * this.interval);
    }

    cursorCost(n) {
        return Math.round(this.costBase * Math.pow(this.costCoefficient, n));
    }

    buyCursor() {
        let cost = this.cursorCost(this.amount);
        if (cookie >= cost)
        {
            this.amount = this.amount + 1;
            cookie = cookie - cost;
            this.amountTextElement.innerHTML = this.amount;
            updateGui("cookie");
            updateGui("cookieRate");
        };
        let nextCost = this.cursorCost(this.amount);
        this.costTextElement.innerHTML = nextCost;
    }

    updateGui() {
        this.amountTextElement.innerHTML = this.amount;
        this.costTextElement.innerHTML = this.cursorCost(this.amount);
    }

    getCookieRate() {
        return this.amount * (this.power / this.interval)
    }

    loadAmount(n) {
        this.amount = n
        this.updateGui()
    }
}
