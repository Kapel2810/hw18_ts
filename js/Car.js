class Car {
    constructor(manufacture, model, color, _engine) {
        this.manufacture = manufacture;
        this.model = model;
        this.color = color;
        this._engine = _engine;
    }
    displayDetales() {
        console.log(this);
    }
    set engine(value) {
        if (value < 0 || value > 4000) {
            throw new Error("the engine capacity is wrong");
        }
        this._engine = value;
    }
    get engine() {
        return this._engine;
    }
}
