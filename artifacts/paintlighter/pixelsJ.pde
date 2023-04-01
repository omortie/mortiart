/* @pjs preload="data/cousinorange.png"; */

PImage img;

void setup() {
  size(639, 775);
  background(0);
  img = loadImage("data/cousinorange.png");
}

void draw() {
  background(0);
    loadPixels();
    for (int x = 0; x < width; x++) {
      for (int y = 0; y < height; y++) {
        int index = x + y * width;
        float r = red(img.pixels[index]);
        float g = green(img.pixels[index]);
        float b = blue(img.pixels[index]);
        float d = dist(x, y, mouseX, mouseY);
        if (d < 255) {
          pixels[index] = color(r - d, g - d, b - d);
        }
      }
    }
    updatePixels();
}
  
