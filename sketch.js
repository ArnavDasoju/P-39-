var PLAY = 1;
var END = 0;
var gameState = PLAY;
var spider,spiderImage
var Background, BackgroundImage
var swatter, swatterImage
var BugGroup
var fly,flyImage
var score=0;
var miss=0;


function preload(){

  spiderImage = loadImage("images/BcaKxp7di.png")
  BackgroundImage = loadImage("images/spider-web-png-transparent-background-11.png")
  flyImage = loadImage("images/fly.png")
}

function setup(){
canva = createCanvas(1000,500)

Background=createSprite(0,0,1000,500)
Background.addImage(BackgroundImage)
Background.x=Background.width/2;
Background.velocityX=-4;

spider = createSprite(100,500)
spider.addImage(spiderImage)
spider.scale = 0.25


BugGroup = new Group();


score = 0;
miss = 0;



}

function draw(){
  background("white");
if(Background.x<100){
   Background.x=Background.width/2;
  }
  
  if(BugGroup.isTouching(spider)){
    BugGroup.destroyEach();
    score = score + 1
  
  }




  if(score >= 25){
    textSize(40);
    fill("black");
    text("SPIDER IS FULL CONGRATS!", 750,250);
    
    //Background.velocityX=0;
    BugGroup.setVelocityXEach(0);





  }

 

  else{
    
    stroke("black");
  textSize(20);
  fill("black");
  text("Miss: "+ miss, 500,100)
  if (frameCount % 50 === 0) {
    miss = miss + 1

  }

  }
  ;
  stroke("black");
  textSize(20);
  fill("black");
  text("Score: "+ score, 500,50)

drawSprites();

if(keyIsDown(UP_ARROW)){
  spider.velocityY = -30;
  }
  
  if(keyIsDown(DOWN_ARROW)){
  spider.velocityY = 30;
  }


  spawnFly();



}

function spawnFly() {
  //write code here to spawn the food
  if (frameCount % 50 === 0) {
    var fly = createSprite(1000,200,40,10);
    fly.y = random(100,500);    
    fly.addImage(flyImage);
    fly.scale = 0.25
    fly.velocityX = -64;
     //assign lifetime to the variable
    fly.lifetime = 100;
    spider.depth = fly.depth + 1;
    
    //add each banana to the group
    BugGroup.add(fly);
  }
}