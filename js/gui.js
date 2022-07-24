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
    document.getElementById('cookie').innerHTML = cookie
}

function updateMaxCookie() {
    document.getElementById('maxCookie').innerHTML = maxCookie
}

function updateClickPower() {
    document.getElementById('clickPower').innerHTML = clickPower
    document.getElementById('clickPowerCost').innerHTML = clickPowerCost(clickPower)
}

function updateCookieRate() {
    document.getElementById('cookieRate').innerHTML = getCookieRate()
}

function updatePrestige() {
    document.getElementById('prestigeCount').innerHTML = prestige
    document.getElementById('muffin').innerHTML = muffin
    document.getElementById('muffinFromPrestige').innerHTML = getMaxMuffinBuy()
    document.getElementById('cookieForNextMuffin').innerHTML = cookieForNextMuffin()
}