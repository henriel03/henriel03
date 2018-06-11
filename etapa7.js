var disparo= false;
var a
var b
var x = 15;
var y = 250;
var yq = 100;
var vidas = 3;
var pontos = 0;
var raio = 20;
var raioJ = 15;
var corAmarelo = true; 
var colisao = false; 
var vx = []; 
var vy = [];
var vdx = []
var vdy = []
var vtam = [];
var qt = 20; // numero de bolinhas no cenario 
var vcorR = []; 
var vcorG = [];
var vcorB = [];
var tamArea; 
var barreiraDePontos = 1000;
var nivel = 1; 
function setup() {
  frameRate(30);
  tamArea = 500;
  createCanvas(500, 500);
  x=15;
  a=x;
  y=250;
  b=y;
 
  for ( i = 0; i < qt; i++) {
    vx[i] = random(0,500); 
    vy[i] = random(0,500);
    vtam[i] = random(5,15);
    vdx[i] = random(-6,6);
    vdy[i] = random(-6,6);
    vcorR[i] = random(0,255);
    vcorG[i] = random(0,255);
    vcorB[i] = random(0,255);
  }//bolinhas no cenario
}

function draw() {
  background(0);
   if ( dist(a,b,460,yq) < raio+raioJ ) {
     if ( colisao == false) { 
       corAmarelo = ! corAmarelo;      
       colisao = true; 
     }
 }
 else {
    colisao = false;  
} //colisão
   for ( i = 0; i < qt; i++) {
    fill(vcorR[i], vcorG[i], vcorB[i]);
    vx[i] = vx[i] + vdx[i];
    vy[i] = vy[i] + vdy[i]; 
    if ( vx[i] > width || vx[i] < 0 ) {
       vdx[i] = -vdx[i]; 
       vcorR[i] = random(0,255);
       vcorG[i] = random(0,255);
       vcorB[i] = random(0,255);
    }
      if ( vy[i] > height || vy[i] < 0 ) {
       vdy[i] = -vdy[i]; 
      
    }
      ellipse(vx[i],vy[i],vtam[i],vtam[i]); //ellipse das bolinhas
  }
 
  
 
 
 fill(230,230,0);
 
  
   textSize(25);
  fill(250,400,10);
  text("Vidas: "+vidas, 10, 30);
  text("Pontos: "+pontos,350, 30);
  text("Nível: "+nivel, 190, 30);
  // incremento de pontos 
  //pontos = pontos + 10; 
    if (pontos>barreiraDePontos) {
    nivel=nivel+1;
    barreiraDePontos = barreiraDePontos + 1000; 

  }
  
  if (keyIsDown(CONTROL) && (! disparo) ){ 
    disparo = true; 
    a=x;
    b=y;
    
  }
  if (disparo) {
    a=a+19;
    if (a> width) {
       disparo = false; 
    }
      ellipse(a,b,1*raio,1*raio); //isso é o desenho do disparo

  }
  
  //if (keyIsDown(LEFT_ARROW))
   // x-=5;

  //if (keyIsDown(RIGHT_ARROW))
   // x+=5;

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
  
   if ( corAmarelo ) {
   fill(255,255,0);
 }
 else {
   fill(255,255,255);
  }
  ellipse(480, yq, 2*raioJ, 4*raio); //ellipse oponente
  yq=yq+2;
  if(yq>height){
   yq=random(-600,-50); 
  }
     fill(255,255,0);

  ellipse(x,y,30,50); //ellipse do jogador
}
