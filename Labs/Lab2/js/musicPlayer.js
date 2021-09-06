let woodwind = new Woodwind(90);        // woodwind object at 90 loudness.
let percussion = new Percussion(110);   // percussion object at 110 loudness.
let string = new String(82);            // string object at 82 loudness.

let instruments = [woodwind, percussion, string];   // put into array.

instruments.forEach((instrument) => {
    instrument.play();                  // call the play method of each object in the instruments array.
});