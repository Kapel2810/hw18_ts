class Speaker {
  public color: string;
  public volume: number;

  constructor(color: string, volume: number) {
    this.color = color;
    this.volume = volume;
  }

  public modeOn() {
    console.log("on");
  }

  public modeOff() {
    console.log("off");
  }

  public showVolume() {
    console.log(this.volume);
  }

  displayAllDetales() {
    console.log(this);
  }
}
