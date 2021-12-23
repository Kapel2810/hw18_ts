class Ramkol {
  private _color: string;
  private _volume: number;

  constructor(color: string, volume: number) {
    this._color = color;
    this._volume = volume;
  }

  //methods

  public modeOn() {
    console.log("on");
  }

  public modeOff() {
    console.log("off");
  }

  public showVolume() {
      console.log(this._volume)
  }

  public displayDetales() {
    console.log(this);
  }

  //setters

  public set volume(value: number) {
    if (value < 0 || value > 10) {
      throw new Error("the volume is out range");
    }
    this._volume = value;
  }

  public set color(value: string) {
    if (value === "black" || value === "white" || value === "gray") {
      this._color = value;
    } else {
      throw new Error("the color is not right");
    }
  }

  //getters
  public get color() {
    return this._color;
  }

  public get volume (){
      return this._volume
  }
}
