class RacingCar extends Car {
    constructor(manufacture, model, color, _engine, maxSpeed, numberOfRaces) {
        super(manufacture, model, color, _engine);
        this.maxSpeed = maxSpeed;
        this.numberOfRaces = numberOfRaces;
    }
    displayDetales() {
        super.displayDetales();
        console.log(this);
    }
    set engine(value) {
        if (value < 0 || value > 4000) {
            throw new Error("the engine capacity is wrong");
        }
        super._engine = value;
    }
    get engine() {
        return this._engine;
    }
}
