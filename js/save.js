function save() {
    if (storageAvailable('localStorage')) {
        let save = {
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
        console.log(localStorage)
    }
    else {
        alert("Your browser does not support save")
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
    }
    else {
        console.log("No save is found")
    }

}

function showSave() {
    if (storageAvailable('localStorage')) {
        save = JSON.parse(localStorage.getItem("save"))
        return save
    }
    else {
        console.log("Your browser does not support save")
    }
}

function clearSave() {
    localStorage.removeItem("save")
    console.log(localStorage)
}
