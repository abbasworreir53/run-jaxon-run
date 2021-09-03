var runner,runner1;
var boundary , boundary1;
var map,map1;
var coin1,coin,bomb1,bomb,drink1,drink,power1,power;

function preload(){
  //pre-load images
  
  runner1 = loadAnimation("Runner-1.png","Runner-2.png");

  map = loadImage("path.png");

  power1 = loadImage("power.png");
  drink1 = loadImage("energyDrink.png");
  coin1= loadImage("coin.png");
  bomb1= loadImage("bomb.png");
  
  
  

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  map1 = createSprite(200,200);
  map1.addImage(map);
  map1.velocityY = 5 ;

  runner = createSprite(120,330);
  runner.addAnimation("running",runner1);
  runner.scale = 0.1;
  
  boundary = createSprite(10,10,80,800);
  boundary.visible = false;

  boundary1 = createSprite(390,10,80,800);
  boundary1.visible = false;
   
  coin = createSprite(300,200);
  coin.addImage(coin1);
  coin.scale = 0.5;

  bomb = createSprite(300,120);
  bomb.addImage(bomb1);
  bomb.scale = 0.1 ;

  power = createSprite(200,160);
  power.addImage(power1);
  power.scale = 0.3;

  drink  = createSprite(100,130);
  drink.addImage(drink1);
  drink.scale = 0.2 ;

  coin = createSprite(100,200);
  coin.addImage(coin1);
  coin.scale = 0.5;

}

function draw() {
  background(0); 

  if(map1.y > 400){
    map1.y = height/2;
  }

  runner.x = World.mouseX;
  runner.collide(boundary);
  runner.collide(boundary1);
    
  drawSprites();

}
