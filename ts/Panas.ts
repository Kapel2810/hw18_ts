class Panas {
  public color: string;
  private _length: number;
  private _intensity: number;
  private _battaries: number;

  public constructor(color: string) {
    this.color = color;
    this._length = Math.floor(Math.random() * 50 + 1);
    this._intensity = Math.floor(Math.random() * 10 + 1);
    this._battaries = Math.floor(Math.random() * 5) + 1;
  }

  //methods

  public turnOn() {
    console.log("Panas is on");
  }

  public turnOff() {
    console.log("Panas id off");
  }

  private changeBattaries(): number {
    return this._battaries
  }

  public displayDetales (){
      console.log(this)
  }

  //setters
  public set length(value: number) {
    if (value < 0 || value > 50) {
      throw new Error("the length is out of range");
    }
    this._length = value;
  }

  public set intensity(value:number) {
    if(value < 0 || value >10){
        throw new Error ("the light intensity is out of range")
    }
    this._intensity =value
  }

  public set battaries (value:number){
    if(value<1 || value >5){
        throw new Error ("the number of battaries in nor right")
    }
    this._battaries = value
  }

  //getters

  public get length() {
    return this._length
  }

  public get intensity (){
      return this._intensity
  }

  public get battaries (){
      return this._battaries
  }
}
