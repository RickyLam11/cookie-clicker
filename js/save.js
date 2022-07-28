function save(auto = true) {
    if (storageAvailable('localStorage')) {
        let save = {
            lastSaveTimestamp: Math.floor(Date.now() / 1000),
            cookie: cookie,
            maxCookie: maxCookie,
            clickPower: clickPower,
            cursor: {
            },
            prestige: prestige,
            muffin: muffin,
        }
        if (cursorLv1.amount) {
            save.cursor.lv1 = cursorLv1.amount
        }
        if (cursorLv2.amount) {
            save.cursor.lv2 = cursorLv2.amount
        }
        if (cursorLv3.amount) {
            save.cursor.lv3 = cursorLv3.amount
        }
        if (cursorLv4.amount) {
            save.cursor.lv4 = cursorLv4.amount
        }
        if (cursorLv5.amount) {
            save.cursor.lv5 = cursorLv5.amount
        }

        localStorage.setItem("save", JSON.stringify(save));
        notify.save(auto)
    }
    else {
        notify.warning("Your browser does not support save")
    }
}

function load() {
    let save = JSON.parse(localStorage.getItem("save"));
    if (save) {
        if (typeof save.cookie !== "undefined") cookie = save.cookie
        if (typeof save.maxCookie !== "undefined") maxCookie = save.maxCookie
        if (typeof save.clickPower !== "undefined") clickPower = save.clickPower
        
        // prestige
        if (typeof save.prestige !== "undefined") prestige = save.prestige
        if (typeof save.muffin !== "undefined") muffin = save.muffin
        cursorLv1.updatePower()
        cursorLv2.updatePower()
        cursorLv3.updatePower()
        cursorLv4.updatePower()
        cursorLv5.updatePower()

        // cursor
        if (save.cursor.lv1) {
            cursorLv1.loadAmount(save.cursor.lv1)
        }
        if (save.cursor.lv2) {
            cursorLv2.loadAmount(save.cursor.lv2)
        }
        if (save.cursor.lv3) {
            cursorLv3.loadAmount(save.cursor.lv3)
        }
        if (save.cursor.lv4) {
            cursorLv4.loadAmount(save.cursor.lv4)
        }
        if (save.cursor.lv5) {
            cursorLv5.loadAmount(save.cursor.lv5)
        }

        // offline Gain
        if (typeof save.lastSaveTimestamp !== "undefined") {
            offlineSecond = (Math.floor(Date.now() / 1000) - save.lastSaveTimestamp)
            offlineEarning = calculateOfflineEarning(offlineSecond)
            cookieClick(offlineEarning)
            notify.load(offlineSecond, offlineEarning)
        }
    }
    else {
        notify.warning("No save is found")
    }
}

function showSave() {
    if (storageAvailable('localStorage')) {
        save = JSON.parse(localStorage.getItem("save"))
        return save
    }
    else {
        notify.warning("Your browser does not support save")
    }
}

function clearSave() {
    localStorage.removeItem("save")
    notify.clearSave()
}

function calculateOfflineEarning(offlineSecond) {
    offlineEarning = 0
    for (const cursor of [cursorLv1, cursorLv2, cursorLv3, cursorLv4, cursorLv5]) {
        offlineEarning += cursor.amount * Math.floor(offlineSecond / cursor.interval) * cursor.power
    }
    return offlineEarning
}

// auto save
setInterval(function() {
    save()
}.bind(this), 1000 * 60);
