class Water {
    constructor(xPos, yPos, height) {
        this.x = xPos;
        this.y = yPos;
        this.width = 600;
        this.height = height;
        this.blue = 5;
        this.color = `rgb(41%, 55%, ${this.blue}%)`;
    }

    update() {
        this.height += 5;
        this.blue += 5;
        if(this.blue > 100) this.blue = 100;
        this.color = `rgb(41%, 55%, ${this.blue}%)`;
    }

    display() {
        fill(this.color);
        rect(this.x, this.y, this.width, -this.height);
    }
}