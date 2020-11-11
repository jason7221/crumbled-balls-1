
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

   
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,500,800,20);
	binwall1 = new Dustbin(598,455,15,70);
	binwall2 = new Dustbin(730,455,15,70);
	binwall3 = new Dustbin(665,482,120,15);
	
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0.4,
		density:1.2
	}
	//Create the Bodies Here.
	ball = Bodies.circle(200,350,20,ball_options);
    World.add(world,ball);
    keyPressed();
	Engine.run(engine);
  
}


function draw() {
	console.log(mouseX);
	console.log(mouseY);
  rectMode(CENTER);
   background(0);
   ground.display();
   binwall1.display();
   binwall2.display();
   binwall3.display();
   ellipseMode(RADIUS);
   fill("white");
   ellipse(ball.position.x,ball.position.y,20,20);
   drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  
		 Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
 }



