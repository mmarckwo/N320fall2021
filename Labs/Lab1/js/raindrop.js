class Raindrop {
    constructor(yPos) {
        this.x = int(random(20, 430));
        this.y = yPos;
        this.radius = int(random(15, 50));
        this.color = [130, 180, int(random(175, 255))];
        this.speed = 2 + Math.random() * 20;
    }

    update() {
        this.y += this.speed;
        fill(this.color);
        circle(this.x, this.y, this.radius);
    }
}