let screen;

function setup() {
createCanvas(displayWidth, displayHeight);//adjusts to screen size 
  background(255);
}

function draw() {

  stroke("pink");
  strokeWeight(3);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
