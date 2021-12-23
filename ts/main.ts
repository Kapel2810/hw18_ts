///////////////////////
//------- ex1----------

//Speaker

// let speaker1 = new Speaker("red", 5)
// speaker1.modeOn()
// speaker1.modeOff()
// speaker1.showVolume()
// speaker1.displayAllDetales()

// let speaker2 = new Speaker("blue", 10)
// speaker2.modeOn()
// speaker2.modeOff()
// speaker2.showVolume()
// speaker2.displayAllDetales()

/////////////////////////
//------- ex 2 -------
//Ramkol

let ramkol1 = new Ramkol("red",10)
ramkol1.modeOn()
ramkol1.modeOff()
ramkol1.displayDetales()

ramkol1.volume = 12
console.log(ramkol1.volume)

ramkol1.color = "yellow"
console.log(ramkol1)

let ramkol2 = new Ramkol("blue",2)
ramkol2.modeOn()
ramkol2.modeOff()
ramkol2.displayDetales()

ramkol2.volume = 6
console.log(ramkol2.volume)

ramkol2.color = "black"
console.log(ramkol2.color)
