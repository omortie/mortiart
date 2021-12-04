var ship;
var flowers = [];
var drops = [];

function setup() {
  createCanvas(700, 500);
  ship = new Ship();

  for (var i = 0; i < 6; i++) {
    let flower = new Flower(i * 100 + 50, 50);
    flowers.push(flower);
  }
}

function draw() {
  background(51);
  ship.show();
  for (flower of flowers) {
    flower.show();
  }
  for (drop of drops) {
    drop.show();
    drop.move();
    for (flower of flowers) {
      if (drop.hits(flower)) {
        flower.grow();
        drops.splice(drops.indexOf(drop), 1);
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