let webcam;
let arcSystem = [];
let scale = 18;
let hoverRadius = 80; 

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  webcam = createCapture(VIDEO);
  webcam.size(width / scale, height / scale);
  webcam.hide();

  for (let i = 0; i < 150; i++) {
    rx = random(-hoverRadius, hoverRadius); 
    ry = random(-hoverRadius, hoverRadius);
    rr = random(10, 30); 
    arcSystem[i] = new Arc(rx, ry, rr);
  }
}

function draw() {
  background(0);
  webcam.loadPixels();
  
  for (let i = 0; i < arcSystem.length; i++) {
    arcSystem[i].move(); 
    arcSystem[i].show(); 
  }
}

class Arc {
  constructor(x, y, r) {
    this.offsetX = x; 
    this.offsetY = y; 
    this.r = r; 
  }

  move() {
    this.x = mouseX + this.offsetX + random(-8, 8);
    this.y = mouseY + this.offsetY + random(-8, 8);
  }

  show() {
    let px = this.x / scale;
    let py = this.y / scale;

    let pixelColour = webcam.get(px, py); 
    fill(pixelColour[0], pixelColour[1], pixelColour[2]);
    noStroke();

    arc(this.x, this.y, this.r, this.r, 0, PI + HALF_PI);
  }
}
