const Raindrops = {

    raindrops: [],
    counter: null,

}

const WaterAttributes = {

    waterLevel: 75,
    water: null,

}

function setup() {
    createCanvas(450, 550);

    WaterAttributes.water = new Water(0, 550, WaterAttributes.waterLevel);

    for (let i = 0; i < 15; i++) {
        Raindrops.raindrops[i] = new Raindrop(10);
    }

    Raindrops.counter = new RaindropCounter();
}

function draw() {
    background("#2b3e6b");

    for (let i = 0; i < Raindrops.raindrops.length; i++) {
        Raindrops.raindrops[i].update();
        if (Raindrops.raindrops[i].y > (550 - WaterAttributes.waterLevel)) {
            let newRaindrop = new Raindrop(10);
            Raindrops.raindrops.splice(i, 1, newRaindrop);
            Raindrops.counter.hitCount += 1;
        }
    }

    if (Raindrops.counter.hitCount >= 10) {
        Raindrops.counter.hitCount = 0;
        WaterAttributes.water.update();
    }

    WaterAttributes.water.display();
}
