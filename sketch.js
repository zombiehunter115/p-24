
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,biin3,ground,ball


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ball = new Paper(100,0,25)
  ground = new Ground(400,680,820,20)
	bin1 = new Box(550,620,20,100)
	bin2 = new Box(635,660,150,20)
	bin3 = new Box(720,620,20,100)
	
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  
ground.display()
bin1.display()
bin2.display()
bin3.display()
ball.display()
  drawSprites();
 
}



