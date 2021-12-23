class Speaker {
    constructor(color, volume) {
        this.color = color;
        this.volume = volume;
    }
    modeOn() {
        console.log("on");
    }
    modeOff() {
        console.log("off");
    }
    showVolume() {
        console.log(this.volume);
    }
    displayAllDetales() {
        console.log(this);
    }
}
