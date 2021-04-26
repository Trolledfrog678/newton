
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bobObject1=createSprite(100,500,100,130)
    bobObject2=createSprite(250,500,100,130)
	bobObject3=createSprite(400,500,100,130)
	bobObject4=createSprite(550,500,100,130)
	bobObject5=createSprite(700,500,100,130)
	roofObject=createSprite(400,150,700,50)
	ropeObject=createSprite(400,200,500,40)
	ropeObject1=createSprite(400,250,20,40)
	ropeObject2=createSprite(400,250,20,40)
	ropeObject3=createSprite(400,270,700,10)
	ropeObject4=createSprite(545,370,20,200)
	ropeObject5=createSprite(400,360,20,200)
	ropeObject6=createSprite(250,370,20,200)
	ropeObject7=createSprite(100,370,20,200)
	ropeObject8=createSprite(700,370,20,200)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background('white');
  
  drawSprites();
 
}



