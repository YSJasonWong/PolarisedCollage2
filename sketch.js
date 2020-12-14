let bg, front, size=0, k;
function preload() {
  bg = loadImage('assets/2.png');
  front = loadImage('assets/1.png');
}

function setup() {
  createCanvas(displayWidth-100, (displayWidth-100)*9/16);
  noStroke();
  noCursor();
}

function draw() {
  k= displayWidth/8;
  background(10);
  fill(255);
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    beginShape();
  vertex(mouseX-2000, mouseY-2000);
  vertex(mouseX+2000, mouseY-2000);
  vertex(mouseX+2000, mouseY+2000);
  vertex(mouseX-2000, mouseY+2000);
  beginContour();
  vertex(mouseX+k+size, mouseY-k-size);
  vertex(mouseX-k-size, mouseY-k-size);
  vertex(mouseX-k-size, mouseY+k+size);
  vertex(mouseX+k+size, mouseY+k+size);
  endContour();
  endShape(CLOSE);
  } else {
    size = 0;
    beginShape();
  vertex(width/2-2000, height/2-2000);
  vertex(width/2+2000, height/2-2000);
  vertex(width/2+2000, height/2+2000);
  vertex(width/2-2000, height/2+2000);
  beginContour();
  vertex(width/2+k+size, height/2-k-size);
  vertex(width/2-k-size, height/2-k-size);
  vertex(width/2-k-size, height/2+k+size);
  vertex(width/2+k+size, height/2+k+size);
  endContour();
  endShape(CLOSE);
  }
  image(bg, 0, 0, displayWidth-100, (displayWidth-100)*9/16);
  image(front, 0, 0, displayWidth-100, (displayWidth-100)*9/16);
}

function mouseWheel(event) {
  print(size);
  if (size>-1 && size<k*2) {
  size -= event.delta/5;
  } else if (size <=-1) {
    size = 0;
  } else if (size >=k*2) {
    size = (k*2-1);
  }
}