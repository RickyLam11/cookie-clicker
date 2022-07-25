let prestige = 0,
	muffin = 0,
	muffinPower = 0.15
// maxCookie = 10e7 * muffin^2

function muffinCost(n) {
	return 1e4 * (n * (n + 2))
}

function getMaxMuffinBuy() {
	let n = maxCookie
	n /= (1e4)
	n += 1
	n = Math.sqrt(n)
	n -= 1

	return Math.floor(n) - muffin
}

function cookieForNextMuffin() {
	return muffinCost(
		muffin + getMaxMuffinBuy() + 1
	) - maxCookie
}

function buyPrestige() {
	getMuffin = getMaxMuffinBuy()
	if (0 < getMuffin) {
		prestige += 1
		muffin += getMaxMuffinBuy()

		cookie = 0
    	clickPower = 1

		cursorLv1.prestige()
        cursorLv2.prestige()
        cursorLv3.prestige()
        cursorLv4.prestige()
        cursorLv5.prestige()

        updateGui()
	}
}