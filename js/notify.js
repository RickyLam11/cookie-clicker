class NotifyClass {
    showIcon = false
    gap = 5
    type = 3

    constructor() {
    }

    warning(title) {
        new Notify ({
            status: 'warning',
            title: title,
            showIcon: this.showIcon,
            autoclose: true,
            gap: this.gap,
            type: this.type,
        })
    }

    buyClickPower() {
        new Notify ({
            status: 'success',
            title: 'Click power increase by 1 !!',
            showIcon: this.showIcon,
            autoclose: true,
            gap: this.gap,
            type: this.type,
        })
    }

    buyCursor(n, name) {
        new Notify ({
            status: 'success',
            title: 'Buy ' + n + ' ' + name,
            showIcon: this.showIcon,
            autoclose: true,
            gap: this.gap,
            type: this.type,
        })
    }

    buyCursorFail() {
        new Notify ({
            status: 'warning',
            title: 'Not enough cookie',
            showIcon: this.showIcon,
            autoclose: true,
            gap: this.gap,
            type: this.type,
        })
    }

    buyPrestige(muffin) {
        new Notify ({
            status: 'success',
            title: 'Prestige success',
            text: 'Earn ' + muffin + ' Muffin',
            showIcon: this.showIcon,
            autoclose: true,
            autotimeout: 6000,
            gap: this.gap,
            type: this.type,
        })
    }

    buyPrestigeFail() {
        new Notify ({
            status: 'warning',
            title: 'Prestige Fail due to no muffin will be earned',
            text: 'Push your max cookie higher',
            showIcon: this.showIcon,
            autoclose: true,
            autotimeout: 6000,
            gap: this.gap,
            type: this.type,
        })
    }

    save(auto = true) {
        let title = 'Save success'
        if (auto) {
            title = 'Auto save success'
        }

        new Notify ({
            status: 'success',
            title: title,
            showIcon: this.showIcon,
            autoclose: true,
            gap: this.gap,
            type: this.type,
        })
    }

    clearSave() {
        new Notify ({
            status: 'success',
            title: 'Clear save success',
            showIcon: this.showIcon,
            autoclose: true,
            gap: this.gap,
            type: this.type,
        })
    }

    load(offlineSecond, offlineEarning) {
        new Notify ({
            status: 'success',
            title: 'Load save success',
            text: 'Time scince last save : ' + secondsToDhms(offlineSecond) +
                  '<br/>' + 
                  'Total offline earning: ' + integerFormat(offlineEarning) + ' cookies',
            showIcon: this.showIcon,
            gap: this.gap,
            type: this.type,
        })
    }

}

const notify = new NotifyClass()
