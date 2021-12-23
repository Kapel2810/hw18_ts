class RacingCar extends Car {
    public maxSpeed: number;
    public numberOfRaces: number;
  
    public constructor(
      manufacture: string,
      model: string,
      color: string,
      _engine: number,
      maxSpeed:number,
      numberOfRaces:number
    ){
      super(manufacture,model,color,_engine)
      this.maxSpeed = maxSpeed
      this.numberOfRaces = numberOfRaces
    }
  
    public displayDetales():void{
      super.displayDetales()
      console.log(this)
  }
  
  public set engine (value:number){
    if( value <0||value >4000){
        throw new Error("the engine capacity is wrong")
    }
  
    super._engine =value
  }
  
  public get engine (){
     return this._engine
  }
  
  }
  