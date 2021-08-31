class RaindropCounter {
    constructor() {
        this._hitCount = 0;
    }

    set hitCount(value) {
        this._hitCount = value;
    }

    get hitCount() {
        return this._hitCount;
    }
}