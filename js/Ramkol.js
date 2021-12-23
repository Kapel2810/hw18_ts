class Ramkol {
    constructor(color, volume) {
        this._color = color;
        this._volume = volume;
    }
    //methods
    modeOn() {
        console.log("on");
    }
    modeOff() {
        console.log("off");
    }
    showVolume() {
        console.log(this._volume);
    }
    displayDetales() {
        console.log(this);
    }
    //setters
    set volume(value) {
        if (value < 0 || value > 10) {
            throw new Error("the volume is out range");
        }
        this._volume = value;
    }
    set color(value) {
        if (value === "black" || value === "white" || value === "gray") {
            this._color = value;
        }
        else {
            throw new Error("the color is not right");
        }
    }
    //getters
    get color() {
        return this._color;
    }
    get volume() {
        return this._volume;
    }
}
