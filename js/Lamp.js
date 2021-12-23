class Lamp {
    constructor(color, length, intensity, battaries) {
        this.color = color;
        this.length = length;
        this.intensity = intensity;
        this.battaries = battaries;
    }
    turnOn() {
        console.log("the Lamp is on");
    }
    turnOff() {
        console.log("the lamp is off");
    }
    changeBattaries(value) {
        let change = this.battaries = value;
        console.log(`the number of batarries changed to ${change} battaries`);
    }
    displayDetales() {
        console.log(this);
    }
}
