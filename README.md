# Workshop-9
Link: [https://whosaidthat-3636.github.io/Workshop-9/]

## Tasks
- Make an experimental 'smart mirror' using live video capture.
- Include manipulations at the level of the pixel.

## Documentation
## Documentation
- To manipulate the live video
  *pixelated shape to have an arc taken from my workshop 0
  *only appear when mouse is hovered over it
  
### 1) Class
- mouseX, Y and offsetX, Y for imagery to appear only when cursor is hovered over the position
- color taken from live capture
```
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

```

### 2) Iteration 1
- Following the workshop tutorial it didn't quite work out for me 
- Arcs are spread and scattered
- It also starts at the top left of the mouseX Y rather than the middle of the cursor
```
let webcam;
let arcSystem = [];
let scale = 18;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  webcam = createCapture(VIDEO);
  webcam.size(width / scale, height / scale);
  webcam.hide();

  for (let i = 0; i < 150; i++) {
    rx = random(20, width - 20); 
    ry = random(20, height - 20);
    rr = random(10, 30); 
    arcSystem[i] = new Arc(rx, ry, rr);
  }
}
```

### 3) Correction
- let hoverRadius = 80; helps set the range in which where the arcs will be placed
- hoverRadius in the nested loop updates based on the mouse position
- mouse X Y is no longer scattered across the sketch
```
let hoverRadius = 80;

 for (let i = 0; i < 150; i++) {
    rx = random(-hoverRadius, hoverRadius); 
    ry = random(-hoverRadius, hoverRadius);
    rr = random(10, 30); 
    arcSystem[i] = new Arc(rx, ry, rr);
```
