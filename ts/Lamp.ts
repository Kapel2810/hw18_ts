class Lamp {
  public color: string;
  public length: number;
  public intensity: number;
  public battaries: number;

  public constructor(
    color: string,
    length: number,
    intensity: number,
    battaries: number
  ) {
      this.color = color
      this.length = length
      this.intensity = intensity
      this.battaries = battaries
  }

  public turnOn (){
      console.log( "the Lamp is on")
  }

  public turnOff() {
      console.log("the lamp is off")
  }

  public changeBattaries (value:number){
    let change = this.battaries = value
    console.log (`the number of batarries changed to ${change} battaries`)
  }

  public displayDetales () {
      console.log(this)
  }
}
