var disparo= false;
var a
var b
var disparoo=false
var ao // tamanho disparo oponente
var bo // tamanho disparo oponente
var x = 15;
var y = 250;
var yq = 100;
var vidas = 3;
var pontos = 0;
var raio = 20;
var raioJ = 15;
var corAmarelo = true; 
var colisao = false; 
var colisaoo = false
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
var barreiraDePontos = 50;
var nivel = 1; 
var yb1 // tamanho da barreira que se movimenta
var yb2 // tamanho da barreira que se movimenta
var vb1 // velocidade da barreira que se movimenta
var vb2 // velocidade da barreira que se movimenta
var vq=2
var tempo=0
var tempodisparo=60
var vdo=19
var x1 = false;
var pontosacumulados=0;
function setup() {
  frameRate(30);
  tamArea = 500;
  createCanvas(500, 500);
  x=15;
  a=x;
  y=250;
  b=y;
 yb1=60
 yb2=330
 vb1=5
 vb2=-5
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
function preload(){
	imgjogador = loadImage("img/jetfighter.png");
}

function draw() {
  if(x1==false && keyIsDown(13)){
  		x1=true
  }
  if(pontosacumulados==80){
	vidas++;
	pontosacumulados=0;
  }
  
  if(x1==true){
  tempo++
  background(0);
   if ( dist(a,b,485,yq) < raio+raioJ ) { //colisaão com o adversario
     if ( colisao == false) { 
       pontos+=10
       pontosacumulados+=10      
       colisao = true; 
     }
 }
  
  
  if ( dist(ao,bo,x,y) < raio+raioJ ) { //colisaão com o jogador e perda de vida
  
      vidas--   
      ao-=400
     
 }
  
  
   if((ao<=90 && bo>60 && bo<150) || (ao<=90 && bo>315 && bo<405)){
   ao-=100
    if ( colisaoo == false) {  
      
       colisaoo = true;
    }
  }
  if((a>=50 && a<80 && b>60 && b<150) || (a>=50&& a<80 && b>315 && b<405)){ //colisão com as barreiras maiores
   a+=700
    if ( colisao == false) {  
      
       colisao = true;
    }
  }
  
  if((ao>=200 && ao<220 && bo>yb1 && bo<(70+yb1)) || (ao>=200 && ao<220 && bo>yb2 && bo<(70+yb2))){ //colisão do disparo do oponente com b menor
   ao+=700
    if ( colisaoo == false) {  
      
       colisaoo = true;
    }
  }
  if((a>=200 && a<220 && b>yb1 && b<(70+yb1)) || (a>=200 && a<220 && b>yb2 && b<(70+yb2))){ //colisão do disparo do jogador com b maior
   a+=700
    if ( colisao == false) {  
      
       colisao = true;
    }
  }
  if(colisao){ // colisão com o adversario e desaparecimento do tiro
    a=600
    b=600
    
    colisao = false
  }

  
//colisão
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
    if (pontos>barreiraDePontos) {
    nivel=nivel+1;
    barreiraDePontos = barreiraDePontos + 50; 
      tempodisparo-=10
      vdo+=5

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
    if (tempo%tempodisparo==0){ // disparo oponente
    disparoo = true; 
    ao=480;
    bo=yq;
    
  }
  if (disparoo) {
    ao=ao-vdo;
    if (ao> width) {
       disparoo = false; 
    }
      ellipse(ao,bo,1*raio,1*raio); //isso é o desenho do disparo oponente

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
  yb2+=vb2
  yb1+=vb1
  if(yb1>430 || yb1<0){ //velcidade barreira 1
    vb1=-vb1
  }
 
  if(yb2>430 || yb2<0){ //velocidade barreira 2
    vb2=-vb2
  }
  
   if ( corAmarelo ) {
   fill(255,255,0);
 }
 else {
   fill(255,255,255);
  }
  ellipse(480, yq, 2*raioJ, 4*raio); //ellipse oponente
  yq=yq+vq;
  if(yq>460 || yq<40){
    vq=-vq
  }
 
  if(yq>height){
   yq=random(-600,-50); 
  }
     fill(255,255,0);
  
  //ellipse(x,y+17,30,50); //ellipse do jogador
 
   image(imgjogador,x-15,y-30,40,70)
  rect(60,60,15,90); // barreira de proteção do jogador
  rect(60,315,15,90); // barreira de proteção do jogador
  rect(200,yb1,15,70); // barreira pequena que movimenta
  rect(200,yb2,15,70); // barreira pequena que movimenta

if(vidas<0){
  background(0);
  textSize(50);
  text("GAME OVER",110,250)
}
    
    
}
  else{
     background(255,255,0);
  	textSize(25);
  	text("Pressione CONTROL para atirar",40,250)
  	text( "\nENTER para iniciar o jogo",55,270)
  }
  if(nivel>5){
  background(0);
  textSize(35);
  text("PARABÉNS VOCÊ VENCEU",30,250)
  }
}
