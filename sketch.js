const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;
var world,engine;

var snow1, snow2, snow3;
var ground = 1;
var flake1, flake2, flake3;
var snowman,Snowman;
var word="";

function preload() {
  snow1 = loadImage("snow1.jpg");
  snow2 = loadImage("snow2.jpg");
  snow3 = loadImage("snow3.jpg");
  Snowman=loadImage("snowman.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(windowWidth,windowHeight);


  back = createSprite(windowWidth/2, windowHeight/2);
  back.addImage(snow1);

  snowman=createSprite(windowWidth,windowHeight*2/3);
  snowman.addImage(Snowman);
  snowman.scale=windowHeight/4500;

  flake1 = new Snow(windowWidth/4,0,100,100);
  flake2 = new Snow(windowWidth*3/4,0,100,100);
  flake3 = new Flake(windowWidth/2,0,100,100);

  
  Engine.run(engine);
}

function draw() {
  Engine.update(engine);

  background(55,55,55);  

  if(ground===1){
    back.addImage(snow1);
    back.scale=2.5;
    snowman.y=windowHeight*2/3;
    snowman.scale=windowHeight/4500;
    word="Let it snow";
  }
  if(ground===2){
    back.addImage(snow3);
    back.scale=1.3;
    snowman.y=windowHeight*2/3;
    snowman.scale=windowHeight/4500;
    word="Let it snow";
  }
  if(ground===3){
    back.addImage(snow2);
    back.scale=1.2;
    snowman.y=windowHeight*9/10;
    snowman.scale=windowHeight/2000;
    word="Let it grow";
  }

  if(snowman.x<snowman.width/-5){
    ground++;
    snowman.x=windowWidth+snowman.width/5;
    Matter.Body.setPosition(flake1.body, {x:windowWidth/4 ,y:0});
    Matter.Body.setPosition(flake2.body, {x:windowWidth*3/4 ,y:0});
    Matter.Body.setPosition(flake3.body, {x:windowWidth/2 ,y:0});
  }
  if(ground>3){
    ground=1;
  }


  if(frameCount%20===0){
    snowman.rotation=random(-10,10);
  }

  snowman.velocityX=-3;


  drawSprites();
  
  flake1.display();
  flake2.display();
  flake3.display();
  
  fill(0,0,0);
  textSize(50);
  stroke(255,255,255);
  strokeWeight(50);
  text(word,windowWidth*4/9,windowHeight/10);
}