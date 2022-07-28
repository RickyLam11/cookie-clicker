class NotifyClass {
    showIcon = false
    gap = 5
    type = 3

    constructor() {
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

    load(offlineEarning) {
        
    }

}

const notify = new NotifyClass()
