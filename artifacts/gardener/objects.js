function Ship() {
    this.x = width / 2;
    
    this.show = function() {
        fill(150, 0, 250);
        rect(this.x, height - 60, 20, 60);
    }

    this.move = function(dir) {
        this.x += 50 * dir;
    }
}

function Flower(x, y) {
    this.x = x;
    this.y = y;
    this.r = 8;

    this.xDir = 5;

    this.show = function() {
        fill(150, 150, 20);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    this.grow = function() {
        this.r += 5;
    }

    this.move = function() {
        this.x += this.xDir;
    }

    this.shiftDown = function() {
        this.xDir *= -1;
        this.y += 10;
    }
}

function Drop(x, y) {
    this.x = x;
    this.y = y;
    this.r = 10;

    this.show = function() {
        fill(0, 255, 255);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    this.move = function() {
        this.y -= 25;
    }

    this.hits = function(flower) {
        const d = dist(this.x, this.y, flower.x, flower.y);

        if (d < this.r + flower.r) {
            return true;
        } else {
            return false;
        }
    }
}