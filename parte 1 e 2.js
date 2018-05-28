var x = 70;
var y = 120;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);
  if (keyIsDown(LEFT_ARROW))
    x-=5;

  if (keyIsDown(RIGHT_ARROW))
    x+=5;

  if (keyIsDown(UP_ARROW))
    y-=5;

  if (keyIsDown(DOWN_ARROW))
    y+=5;
  
  rect(340, 100, 40, 40);
  ellipse(x,y,55,35);  

}
