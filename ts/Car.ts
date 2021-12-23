class Car {
  public manufacture: string;
  public model: string;
  public color: string;
  public _engine: number;

   public constructor(
    manufacture: string,
    model: string,
    color: string,
    _engine: number
  ) {
        this.manufacture = manufacture
        this.model = model
        this.color = color
        this._engine = _engine
  }

 public displayDetales(){
     console.log(this)
 }

 public set engine (value:number){
    if( value <0||value >4000){
        throw new Error("the engine capacity is wrong")
    }
    this._engine = value
 }

 public get engine (){
     return this._engine
 }
}
