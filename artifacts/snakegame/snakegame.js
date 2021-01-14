var s;
var scl = 20;
var food;
var isGameOver = false;

function setup() {
  createCanvas(600, 400);
  s = new Snake();
  pickLocation();
  frameRate(10);
}

function draw() {
  background(51);
  
  if (s.eat(food)) {
    pickLocation();
  }
  
  if (isGameOver) {
    text('Game Over! Press Enter Key To Try Again', 170, 200);
  } else {
    s.update();
    s.show();
    if (s.death()) {
      isGameOver = true;
    } 
  
    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
  }
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  
  food = createVector(floor(random((cols))), floor(random(rows)));
  food.mult(scl); 
}

function keyPressed() {
  if (keyCode == ENTER) {
    s.x = 0;
    s.y = 0;
    pickLocation();
    isGameOver = false;
  }
  if (keyCode == UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode == DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode == LEFT_ARROW) {
    s.dir(-1, 0);
  } else if (keyCode == RIGHT_ARROW) {
    s.dir(1, 0);
  }
}

class Snake{
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
  }

  update() {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length-1; i++) {
        this.tail[i] = this.tail[i+1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);
    
    this.x = this.x + this.xspeed * scl; 
    this.y = this.y + this.yspeed * scl;
    
    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);
  }
  
  death() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total = 0;
        this.tail = [];
        return true;
      } else {
        return false;
      }
    }
  }
  
  eat(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }
  
  dir(xspeed, yspeed) {
    this.xspeed = xspeed;
    this.yspeed = yspeed;
  }
  
  show() {
    fill(100, 0, 255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }
}
