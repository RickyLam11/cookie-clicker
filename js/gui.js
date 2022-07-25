function updateGui(id = "") {
    // console.log('updateGui :' + id)
    switch(id) {
        case 'cookie':
            updateCookie()
            break;
        case 'maxCookie':
            updateMaxCookie()
            break;
        case 'cookieRate':
            updateCookieRate()
            break;
        case 'clickPower':
            updateClickPower()
            break;
		case 'maxBuy':
            cursorLv1.updateGuiMaxBuy()
            cursorLv2.updateGuiMaxBuy()
            cursorLv3.updateGuiMaxBuy()
            cursorLv4.updateGuiMaxBuy()
            cursorLv5.updateGuiMaxBuy()
            break;
        case 'prestige':
            updatePrestige()
        default:
            updateCookie()
            updateMaxCookie()
            updateCookieRate()
            updateClickPower()
            updatePrestige()

            cursorLv1.updateGui()
            cursorLv2.updateGui()
            cursorLv3.updateGui()
            cursorLv4.updateGui()
            cursorLv5.updateGui()
            
            cursorLv1.updateGuiMaxBuy()
            cursorLv2.updateGuiMaxBuy()
            cursorLv3.updateGuiMaxBuy()
            cursorLv4.updateGuiMaxBuy()
            cursorLv5.updateGuiMaxBuy()

    }
    return true
}

function updateCookie() {
    document.getElementById('cookie').innerHTML = integerFormat(cookie)
}

function updateMaxCookie() {
    document.getElementById('maxCookie').innerHTML = integerFormat(maxCookie)
}

function updateClickPower() {
    document.getElementById('clickPower').innerHTML = integerFormat(clickPower)
    document.getElementById('clickPowerCost').innerHTML = integerFormat(clickPowerCost(clickPower))
}

function updateCookieRate() {
    document.getElementById('cookieRate').innerHTML = numberFormat(getCookieRate())
}

function updatePrestige() {
    document.getElementById('prestigeCount').innerHTML = integerFormat(prestige)
    document.getElementById('muffin').innerHTML = integerFormat(muffin)
    document.getElementById('muffinFromPrestige').innerHTML = integerFormat(getMaxMuffinBuy())
    document.getElementById('cookieForNextMuffin').innerHTML = integerFormat(cookieForNextMuffin())
}

function integerFormat(n) {
    return numberFormat(n, 'integer');
}

function numberFormat(n, option="") {
    switch(option) {
        case 'integer':
            digit = 0
            break;
        default:
            digit = 3
            break;
    }
    return n.toFixed(digit).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function percentageFormat(n, digit=3) {
    return (n * 100).toFixed(digit) + '%';
}