let screen;

function setup() {
createCanvas(displayWidth, displayHeight);//adjusts to screen size 
  background(220);
}

function draw() {

  stroke(255);
  strokeWeight(3);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}