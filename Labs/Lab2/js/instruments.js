class Instruments {                             // Main instrument class.
    constructor(loudness, family, verb) {       // set properties.
        this.loudness = loudness;
        this.family = family;
        this.verb = verb;
    }

    play() {        // tell about how the instrument is played.
        console.log(this.family + " instruments " + this.verb + " at " + this.loudness + "db.");
    }
}

class Woodwind extends Instruments {            // Woodwind subclass.
    constructor(loudness) {                     // take in custom loudness amount.
        super(loudness);                        // pass up the loudness amount.
        this.family = "Woodwind";               // set family property.
        this.verb = "play";                     // set verb property. same process for subclasses below.
        
    }
}

class Percussion extends Instruments {          // Percussion subclass.
    constructor(loudness) {
        super(loudness);
        this.family = "Percussion";
        this.verb = "ting";
    }
}

class String extends Instruments {              // String subclass.
    constructor(loudness) {
        super(loudness);
        this.family = "String";
        this.verb = "resonate";
    }
}