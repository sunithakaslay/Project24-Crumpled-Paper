var engine, world;
var ground, paper, dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,690,1200,20);
	paper = new Paper(200,650,20);
	dustbin = new Dustbin(800,670);
	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  ground.display();
  paper.display();
  dustbin.display();

	
 }

function keyPressed() {
	if (keyCode === UP_ARROW) {
		//console.log(paper.body.position);
		Body.applyForce(paper.body, paper.body.position, {x:60,y:-65});
	}
	
}