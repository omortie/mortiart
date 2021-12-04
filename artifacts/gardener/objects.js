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

    this.show = function() {
        fill(150, 150, 20);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    this.grow = function() {
        this.r += 5;
    }
}

function Drop(x, y) {
    this.x = x;
    this.y = y;
    this.r = 10;

    this.show = function() {
        fill(50, 0, 250);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    this.move = function() {
        this.y -= 5;
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