// main run
let cookie = 0,
    clickPower = 1,
    maxCookie = 0

const cursorLv1 = new Cursor(1, 0.6, 4, 1.07, 'cursorLv1', 'cursorLv1Cost', 'cursorLv1MaxBuy')
const cursorLv2 = new Cursor(60, 3, 60, 1.15, 'cursorLv2', 'cursorLv2Cost', 'cursorLv2MaxBuy')
const cursorLv3 = new Cursor(540, 6, 720, 1.14, 'cursorLv3', 'cursorLv3Cost', 'cursorLv3MaxBuy')
const cursorLv4 = new Cursor(4320, 12, 8640, 1.13, 'cursorLv4', 'cursorLv4Cost', 'cursorLv4MaxBuy')
const cursorLv5 = new Cursor(51840, 24, 103680, 1.12, 'cursorLv5', 'cursorLv5Cost', 'cursorLv5MaxBuy')

updateGui()

// fucntion
function cookieClick(n) {
    // console.log('cookieClick:' + n)
    cookie = cookie + n
    maxCookie = Math.max(maxCookie, cookie)
    updateGui("cookie")
    updateGui("maxCookie")
    updateGui("prestige")
    updateGui("maxBuy")
}

function clickPowerCost(n) {
    return Math.round(10 * Math.pow(1.5, n));
}

function buyClickPower() {
    let cost = clickPowerCost(clickPower);
    if(cookie >= cost) {
        clickPower = clickPower + 1;
        cookie = cookie - cost;
        updateGui("cookie");
    };
    updateGui("clickPower");
}

function getCookieRate() {
    total = cursorLv1.getCookieRate() + 
            cursorLv2.getCookieRate() +
            cursorLv3.getCookieRate() +
            cursorLv4.getCookieRate() +
            cursorLv5.getCookieRate();
    return Math.floor(total * 100) / 100;
}
