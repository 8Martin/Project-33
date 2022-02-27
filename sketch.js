const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var snow, snowImg;
var boy,boyImg;

var engine,world;

var music;

var ball = [];

function preload(){
  music = loadSound("ChristmasMusic.mp3");
  boyImg = loadAnimation("boy1.png","boy2.png","boy3.png")
  childImg = loadAnimation("child1.png","child2.png","child3.png","child4.png")
  snowImg = loadImage("snow5.webp");
  back = loadImage("snow1.jpg");

}

function setup() {
  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;

  boy = createSprite(590,500,10,10);
  boy.addAnimation("kid",boyImg);
  boy.scale = 1;

  child = createSprite(160,500,10,10);
  child.addAnimation("kid3",childImg);
  child.scale = 1;

  block1= createSprite(30,500,10,100);
  block1.visible = false;
  block2 = createSprite(360,500,10,100);
  block2.visible = false;
  block3= createSprite(430,500,10,100);
  block3.visible = false;
  block4 = createSprite(710,500,10,100);
  block4.visible = false;

  music.play();
  music.loop();


}

function draw() {
  background(back);  

  Engine.update(engine);
 
  if(child.isTouching(block1)){
    child.velocityX = 2;
  }
  if(child.isTouching(block2)){
   child.velocityX = -child.velocityX;
  }

  if(boy.isTouching(block3)){
   boy.velocityX = 2;
  }
  if(boy.isTouching(block4)){
   boy.velocityX = -2;
  }

  if(frameCount%40===0){
    ball.push(new Snow(random(100,500),100,10));
  }

  drawSprites();

  for (var j = 0; j < ball.length; j++) {
    ball[j].display();
   
  }
}

