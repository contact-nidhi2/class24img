const Engine = Matter.Engine;
const World =Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
var box1,box2,box3,box4;
var ground;
var pig1,pig2;
var log1,log2;

function setup() {
  rectMode(CENTER);
  createCanvas(1200,400);
  engine = Engine.create();
  world =engine.world;
  ground = new Ground(600,height,1200,20);

  box1= new Box(700,320,70,70);
  box2 =new Box(920,320,70,70); 
  pig1= new Pig(810,350)
  log1 = new Log(810,300,300,PI/2)

  box3= new Box(700,270,70,70);
  box4 =new Box(920,270,70,70); 
  pig2= new Pig(810,290)
  log2 = new Log(810,260,300,PI/2)
  
  log3 = new Log(760,120,180, PI/7);
  log4 = new Log(870,120,180, -PI/7);

  bird =new Bird(100,100)
}

function draw(){
  rectMode(CENTER); 

  background(0); 
  Engine.update(engine);
  ground.display();

  box1.display();
  box2.display();
  pig1.display();
  log1.display();
   
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
 
   log3.display();
   log4.display();

  bird.display();
}

