
  var back0;
var car0;
var odi0;
var bnw0;
var mars0;
var car4
var power0;
var monster0
var play=0;
var end=1;
var moder=2;
var gameState=play;
var score=0;
var invisible0;
var achieve
var over0;
var invi2;
var sahara;
var abe
var sailor;
var edges



function preload(){
  backImg=loadImage("back.png");
  carImg=loadAnimation("car.png");
  monsterImg=loadAnimation("monster.png")
  
  safari=loadImage("car 2.png");
  bmw=loadImage("model.png");
  marImg=loadImage("mars.png");
  car4Img=loadImage("car4.png");
  
  powerImg=loadImage("power.png");
  
  
  abe=loadSound("Abe.mp3");
  coin0=loadSound("coin.mp3");
  
  
  
  overImg=loadImage("over.png");
  shara=loadSound("Shara.mp3");
  
  
}
function setup() {
  createCanvas(600,460);
  
  backFu();
  carFu();
  
 Edges();
  
  Safari=new Group();
  Bmw=new Group();
  Mar=new Group();
  Car=new Group();
  Power=new Group();
score=0
  Invi=new Group();
 
   overFu();
  
  
  
  INVI2= new Group()
 
  
shara.loop();
  
  
  
}

function draw() {
  background("black");
  
car0.collide(edge1);
car0.collide(edge2);
car0.collide(edge3);
car0.collide(edge4);  
 
  
  if(gameState===play){
    
    over0.visible=false;
   
    
    
     Invi2();
    
    if(car0.isTouching(INVI2)){
      INVI2.destroyEach();
      score=score+1;
      
    }
    
    car0.changeAnimation("s",carImg);
    
      safari0();
    
      if(keyDown("left_arrow")){
    car0.x=car0.x-10;
  }
 
  
  if(keyDown("right_arrow")){
    car0.x=car0.x+10;
  }
  
  if(keyDown("up_arrow")){
    car0.y=car0.y-10;
    
  }
    
    if(keyDown("down_arrow")){
    car0.y=car0.y+10;
  }
    
    powerFu();
    
    
    if(Power.isTouching(car0)){
      Power.destroyEach();

      gameState=moder;
    }
     if(Safari.isTouching(car0)||Bmw.isTouching(car0)||Mar.isTouching(car0)||Car.isTouching(car0)){
   
      
abe.play();
    gameState=end;
    
  }
    
      
  }

  
  if(gameState===moder){
    
    over0.visible=false;
    INVI2.destroyEach();
    
    car0.changeImage("s2",monsterImg);
       
       safari0();
    invisible();
    
    
            if(keyDown("left_arrow")){
    car0.x=car0.x-10;
  }
 
  
  if(keyDown("right_arrow")){
    car0.x=car0.x+10;
  }
  
  if(keyDown("up_arrow")){
    car0.y=car0.y-10;
    
  }
    
    if(keyDown("down_arrow")){
    car0.y=car0.y+10;
  }
    
    
    if(car0.isTouching(Invi)){
       gameState=play;
       }
    if(Safari.isTouching(car0)||Bmw.isTouching(car0)||Mar.isTouching(car0)||Car.isTouching(car0)){
      coin0.play();
      
      Safari.destroyEach();
    
      
      Bmw.destroyEach();
      
      
      Mar.destroyEach();
  
      
      Car.destroyEach();
    
      score=score+10;
      
      
       
      
  }
  }
  
  if(back0.y>250){
    back0.y=180;
  }
  
  
 if(gameState===end){
   
   over0.visible=true;
   
    
       Safari.setVelocityYEach(0);
    Safari.setLifetimeEach(-1);
    
    Bmw.setVelocityYEach(0);
    Bmw.setLifetimeEach(-1);
    
    Mar.setVelocityYEach(0);
    Mar.setLifetimeEach(0);
    
    Car.setVelocityYEach(0);
    Car.setLifetimeEach(-1);
    
    back0.velocityY=0;
   
   Power.setVelocityYEach(0);
   Power.setLifetimeEach(-1);
   
   INVI2.destroyEach();
   
 
 }

  
   
  
  drawSprites();
  
  text("score: "+score,300,30);
}

function backFu(){
  back0=createSprite(300,250,20,20);
  back0.addImage("b",backImg);
  back0.scale=1.7;
  back0.velocityY=5;
  

}

function carFu(){
  car0=createSprite(250,340,20,20);
  car0.addAnimation("s",carImg);
  car0.addAnimation("s2",monsterImg);
  car0.scale=0.3;
  
}


function safari0(){
  if(frameCount%100===0){
  odi0=createSprite(0,0,20,20);
  odi0.x=Math.round(random(20,580));
  odi0.velocityY=(5+5*(frameCount/1000));
    odi0.lifetime=200;
  var rand=Math.round(random(1,4));
  
  switch(rand){
    case 1:odi0.addImage("o",safari);
      odi0.scale=0.3;
      odi0.depth=car0.depth-1;
      Safari.add(odi0);
      
      break;
      
      case 2:odi0.addImage("c",bmw);
      odi0.scale=0.3;
      odi0.depth=car0.depth-1;
      Bmw.add(odi0);
      break;
      
      case 3:odi0.addImage("m",marImg);
      odi0.scale=0.3;
      odi0.depth=car0.depth-1;
      Mar.add(odi0);
      break;
      
      case 4:odi0.addImage("c4",car4Img);
      odi0.scale=0.3;
      odi0.depth=car0.depth-1;
      Car.add(odi0);
      
      break;
      
      default:break;
  }
    
  
}
}

function powerFu(){
  if(frameCount%165===0){
  power0=createSprite(random(20,580),0,20,20);
  power0.addImage("t",powerImg);
  power0.velocityY=(5+5*(frameCount/1000));
    power0.scale=0.3;
    
    Power.add(power0);
    
  
}
}

function invisible(){
  if(frameCount%700===0){
  invisible0=createSprite(300,0,2000,5);
    invisible0.velocityY=5;
    
    invisible0.lifetime=400;
    
  invisible0.visible=false;
    
    Invi.add(invisible0);
  
}
}

 

function overFu(){
  over0=createSprite(300,200,20,20);
  over0.addImage("o",overImg)
  over0.scale=0.8;

  over0.depth=over0.depth+1;
}
  
 

function Invi2(){
  if(frameCount%70===0){
  invi2=createSprite(300,0,2000,5);
  invi2.velocityY=5;
    invi2.setlifetime=400;
    invi2.visible=false;
    
    INVI2.add(invi2);
    
}
}


function Edges(){
  edge1=createSprite(2,230,2,2000);
  edge1.visible=false;
  
  edge2=createSprite(598,230,2,2000);
  edge2.visible=false;
  
  edge3=createSprite(300,2,2000,2);
  edge3.visible=false;
  
  edge4=createSprite(300,458,2000,2);
  edge4.visible=false;
  
}