function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}

function secondsToDhms(n) {
    n = Number(n);
    var d = Math.floor(n / 86400);
    var h = Math.floor(n % 86400 / 3600);
    var m = Math.floor(n % 86400 % 3600 / 60);
    var s = Math.floor(n % 86400 % 3600 % 60);

    displayArray = []
    d > 0 ? displayArray.push(d + (d == 1 ? " day" : " days")) : null;
    h > 0 ? displayArray.push(h + (h == 1 ? " hour" : " hours")) : null;
    m > 0 ? displayArray.push(m + (m == 1 ? " minute" : " minutes")) : null;
    s > 0 ? displayArray.push(s + (s == 1 ? " second" : " seconds")) : null;
    return displayArray.join(', ');
}