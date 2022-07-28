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
        case 'prestige':
            updatePrestige()
        case 'cursor':
            for (const cursor of allCursor) {
                cursor.updateGui()
            }
            break;
        case 'maxBuy':
            for (const cursor of allCursor) {
                cursor.updateGuiMaxBuy()
            }
            break;
        default:
            updateCookie()
            updateMaxCookie()
            updateCookieRate()
            updateClickPower()
            updatePrestige()

            for (const cursor of allCursor) {
                cursor.updateGui()
                cursor.updateGuiMaxBuy()
            }
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