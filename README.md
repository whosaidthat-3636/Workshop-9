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


## Notes
### 1) Takes and displays video from device
```
function setup(){
pixelDensity(1);
createCapture(VIDEO);}

// manipulating live video
let webcam;

function setup(){
pixelDensity(1);
webcam = createCapture(VIDEO);
webcam.size(aspect ratio);
// to not show on browser
webcam.hide();}
```

### 2) Color taken based on live image
```
function draw(){
image(webcam)}

let pixelColour = webcam.get(this.x, this.y);
fill(pixelColour[0], pixelColour[1], pixelColour[2], alpha);

// using class functions from workshop 7
// in this instance its referred to as RGB in a sense
// disable bg and image(webcam) to just draw on the screen
```

### 3) Video enhancements
```
- Issue could be size of the video
//rescale
let scale = value;
//using variable so easier to change
webcam.size(width/scale, height/scale);
//pixelColour to change
show(){
let pX = this.x/scale;
let pY = this.y/scale}
letpixelColour = webcam.get(pX, pY);
//these variables allow us to extract data from
function draw(){
webcam.loadPixels()}
```

### 4) Different effects
```
//increase the number of balls 
// increase the sizes of balls
function setup(){
for ( x = 0; x < value, x++){
rr = random(smallest value, biggest)}
```
