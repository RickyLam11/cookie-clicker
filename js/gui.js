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
    document.getElementById('cookie').innerHTML = numberFormat(cookie)
}

function updateMaxCookie() {
    document.getElementById('maxCookie').innerHTML = numberFormat(maxCookie)
}

function updateClickPower() {
    document.getElementById('clickPower').innerHTML = numberFormat(clickPower)
    document.getElementById('clickPowerCost').innerHTML = numberFormat(clickPowerCost(clickPower))
}

function updateCookieRate() {
    document.getElementById('cookieRate').innerHTML = numberFormat(getCookieRate())
}

function updatePrestige() {
    document.getElementById('prestigeCount').innerHTML = numberFormat(prestige)
    document.getElementById('muffin').innerHTML = numberFormat(muffin)
    document.getElementById('muffinFromPrestige').innerHTML = numberFormat(getMaxMuffinBuy())
    document.getElementById('cookieForNextMuffin').innerHTML = numberFormat(cookieForNextMuffin())
}

function numberFormat(n) {
    return n.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}