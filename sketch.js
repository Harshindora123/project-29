const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var engine,world;
var ground1,ground2,ground3;
var box1,box2,box3,box4,box5,box6,box7,box8,box10,box11,box12,box13,box14,box15,box16,box17,box18;
var polygon,polygonimg;
var chain1;

function preload()
{
	polygonimg = loadImage("polygon.png");
}

function setup() {
	var canvas = createCanvas(1200, 400);
   engine = Engine.create();
  world = engine.world;

 
 ground1= new Ground(600,400,1200,50);


 box1 = new Box(330,235,30,40);
 box2 = new Box(360,235,30,40);
 box3 = new Box(390,235,30,40);
 box4 = new Box(420,235,30,40);
 box5 = new Box(450,235,30,40);

 box6 = new Box(360,195,30,40);
 box7 = new Box(390,195,30,40);
 box8 = new Box(420,195,30,40);

 box9 = new Box(390,155,30,40); 

 box10=  new Box(690,200,30,40);
 box11=  new Box(720,200,30,40);
 box12=  new Box(750,200,30,40);
 box13=  new Box(780,200,30,40);
 box14=  new Box(810,200,30,40);
  
 box15=new Box(720,160,30,40);
 box16=new Box(750,160,30,40);
 box17=new Box(780,160,30,40);

 box18=new Box(750,120,30,40);

 ground2=new Ground(400,300,250,30);
 ground3=new Ground(750,250,250,30);
 

 var options={
   'isStatic': false,
         'restitution':0.3,
         'friction': 2.0,
         'density':1.5
 }
 polygon = Bodies.circle(50,200,20,options);
 World.add(world,polygon)
 chain1 = new Chain(this.polygon,{x:100,y:200});


 Engine.run(engine);


}


function draw() {
 rectMode(CENTER);
  Engine.update(engine);
  background(200);
 
  chain1.display();

  ground1.display();
  ground2.display();
  ground3.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  

  imageMode(CENTER);
  image(polygonimg,polygon.position.x,polygon.position.y,40,40);
 
 
  drawSprites();
 
}


function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain1.fly();
}