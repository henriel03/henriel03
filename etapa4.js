var disparo= false;
var a=x
var b=y
var x = 15;
var y = 25;
var yq = 100;
function setup() {
  createCanvas(500, 500);
  x=15;
  a=x;
  y=25;
  b=y;
}

function draw() {
  background(50);
  if (keyIsDown(CONTROL) && (! disparo) ){ 
    disparo = true; 
    a=x;
    b=y;
  }
  if (disparo) {
    a=a+7;
    if (a> width) {
       disparo = false; 
    }
  }
  
  if (keyIsDown(LEFT_ARROW))
    x-=5;

  if (keyIsDown(RIGHT_ARROW))
    x+=5;

  if (keyIsDown(UP_ARROW))
    y-=5;

  if (keyIsDown(DOWN_ARROW))
    y+=5;
if(y<25){
 
  y=25;
}
  if(y>475){
    y=475;
  }
  if(x<15){
    x=15;
  }
  if(x>485){
    x=485;
}
  rect(460, yq, 40, 40);
  yq=yq+2;
  if(yq>height){
   yq=random(-600,-50); 
  }
  ellipse(x,y,30,50);
rect(a,b,5,5);
}
