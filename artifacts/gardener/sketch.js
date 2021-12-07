var ship;
var flowers = [];
var drops = [];
var gameIsOver = false;

function setup() {
  createCanvas(700, 500);
  ship = new Ship();

  for (var i = 0; i < 6; i++) {
    let flower = new Flower(i * 100 + 50, 50);
    flowers.push(flower);
  }
}

function draw() {
  if (gameIsOver) {
    background(255, 0, 0);
  } else {
    background(51);
    ship.show();
    for (flower of flowers) {
      flower.show();
      flower.move();

      if (flower.x > width || flower.x < 0) {
        for (flower of flowers) {
          flower.shiftDown();
          
          if (flower.y == height) {
            gameIsOver = true;
          }
        }
      }
    }
    for (drop of drops) {
      drop.show();
      drop.move();
      for (flower of flowers) {
        if (drop.hits(flower)) {
          flowers.splice(flowers.indexOf(flower), 1);
          drops.splice(drops.indexOf(drop), 1);
        }
      }
    }
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    ship.move(1);
  }
  if (keyCode === LEFT_ARROW) {
    ship.move(-1);
  }
  if (key === ' ') {
    let drop = new Drop(ship.x, height);
    drops.push(drop);
  }
}