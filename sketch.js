
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Roof1;
var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5;
var rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	Roof1 = new roof(500,150,500,10);

	bobobject1 = new bob(500,400,30);
	bobobject2 = new bob(450,400,30);
    bobobject3 = new bob(550,400,30);
	bobobject4 = new bob(400,400,30);
	bobobject5 = new bob(600,400,30);

    rope1 = new Rope(bobobject1.body,Roof1.body,0,0);
	rope2 = new Rope(bobobject2.body,Roof1.body,0,0);
	rope3 = new Rope(bobobject3.body,Roof1.body,0,0);
	rope4 = new Rope(bobobject4.body,Roof1.body,0,0);
	rope5 = new Rope(bobobject5.body,Roof1.body,0,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 Roof1.display();

 bobobject1.display();
 bobobject2.display();
 bobobject3.display();
 bobobject4.display();
 bobobject5.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

}



