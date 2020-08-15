const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	football=loadImage("football.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	
  ground1= Bodies.rectangle(410,500,230,10,{isStatic:true})
  World.add(world,ground1);
  polygon=Bodies.circle(200,50,20);
  World.add(world,polygon);
	block1 = new Square(320,480,30,40);
	block2 = new Square(350,480,30,40);
	block3 = new Square(380,480,30,40);
	block4 = new Square(410,480,30,40);
	block5 = new Square(440,480,30,40);
	block6 = new Square(470,480,30,40);
	block7 = new Square(500,480,30,40);
	block8 = new Square(350,440,30,40);
	block9 = new Square(380,440,30,40);
	block10 = new Square(410,440,30,40);
	block11 = new Square(440,440,30,40);
	block12 = new Square(470,440,30,40);
	block13 = new Square(380,400,30,40);
	block14 = new Square(410,400,30,40);
	block15 = new Square(440,400,30,40);
	block16 = new Square(410,360,30,40);
	

  chain1=new Chain(this.polygon,{x:100,y:200})
	

	Engine.run(engine);
  
}
attach(body)   
{this.sling.bodyA-body;}



function draw() {
  rectMode(CENTER);
  background("green");
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
 rect(ground1.position.x,ground1.position.y,230,10);
  
imageMode(CENTER)
image(football,polygon.position.x,polygon.position.y,100,100)
  chain1.display();
  
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
} 
function mouseReleased(){
  chain1.fly()
}

function keyPressed(){
if(keycode===32);

}



