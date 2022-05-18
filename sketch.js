const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground_obj;
var left;
var right;
var leftside;
var rightside;
var b1;
var b1img;

function preload()
{
	b1img=loadImage("right.png")
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	ground_obj= new ground(400, 380, 800, 7);
	left = new ground(550, 350, 7, 50);
	right = new ground(700, 350, 7, 50);
	leftside = new ground(10, 200, 2, 400);
	rightside = new ground(800, 200, 2, 400);

	b1 = createSprite(650, 40)
	b1.addImage(b1img)
	b1.scale=0.2

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	//Create the Bodies Here.
	ball=Bodies.circle(100, 30, 10, ball_options)
	World.add(world, ball)

	ellipseMode(RADIUS);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x, ball.position.y, 10)
  ground_obj.show()
  left.show()
  right.show()
  leftside.show()
  rightside.show()

  if (keyDown("RIGHT_ARROW")){
	  keypressed()
  }
  
  drawSprites();
 
}

function keypressed(){
	Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0.08, y: 0})
}
