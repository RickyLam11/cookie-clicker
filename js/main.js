// main loop
let cookie = 0,
    clickPower = 1,
    maxCookie = 0

const cursorLv1 = new Cursor('Lv1 Cursor', 1, 0.6, 4, 1.07, 'cursorLv1')
const cursorLv2 = new Cursor('Lv2 Cursor', 60, 3, 60, 1.15, 'cursorLv2')
const cursorLv3 = new Cursor('Lv3 Cursor', 540, 6, 720, 1.14, 'cursorLv3')
const cursorLv4 = new Cursor('Lv4 Cursor', 4320, 12, 8640, 1.13, 'cursorLv4')
const cursorLv5 = new Cursor('Lv5 Cursor', 51840, 24, 103680, 1.12, 'cursorLv5')

const allCursor = [cursorLv1, cursorLv2, cursorLv3, cursorLv4, cursorLv5]

load()

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
    updateGui("clickPower")
    notify.buyClickPower()
}

function getCookieRate() {
    rate = 0
    for (const cursor of allCursor) {
        rate += cursor.getCookieRate()
    }
    return rate
}
