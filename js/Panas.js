class Panas {
    constructor(color) {
        this.color = color;
        this._length = Math.floor(Math.random() * 50 + 1);
        this._intensity = Math.floor(Math.random() * 10 + 1);
        this._battaries = Math.floor(Math.random() * 5) + 1;
    }
    //methods
    turnOn() {
        console.log("Panas is on");
    }
    turnOff() {
        console.log("Panas id off");
    }
    changeBattaries() {
        return this._battaries;
    }
    displayDetales() {
        console.log(this);
    }
    //setters
    set length(value) {
        if (value < 0 || value > 50) {
            throw new Error("the length is out of range");
        }
        this._length = value;
    }
    set intensity(value) {
        if (value < 0 || value > 10) {
            throw new Error("the light intensity is out of range");
        }
        this._intensity = value;
    }
    set battaries(value) {
        if (value < 1 || value > 5) {
            throw new Error("the number of battaries in nor right");
        }
        this._battaries = value;
    }
    //getters
    get length() {
        return this._length;
    }
    get intensity() {
        return this._intensity;
    }
    get battaries() {
        return this._battaries;
    }
}
