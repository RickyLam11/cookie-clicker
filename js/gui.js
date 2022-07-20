function updateGui(id = "") {
    // console.log('updateGui :' + id)
    switch(id) {
        case 'cookie':
            updateCookie()
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
        default:
            updateCookie()
            updateCookieRate()
            updateClickPower()

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

function updateClickPower() {
    document.getElementById('clickPower').innerHTML = clickPower
    document.getElementById('clickPowerCost').innerHTML = clickPowerCost(clickPower)
}

function updateCookieRate() {
    document.getElementById('cookieRate').innerHTML = getCookieRate()
}