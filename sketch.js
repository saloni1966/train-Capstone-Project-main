
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var train,kart1,kart2,kart3,kart4;
var bg;
var button1,button2,button3;
var c1,c2,c3;

function preload(){
  bg = loadImage("backdrop.svg");
}

function setup() {
  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,440,800,90)
  train = new Train(100,300, 100,100)
  kart1 = new Kart1(250,300, 100,100)
  kart2 = new Kart2(400,300, 100,100)
  kart3 = new Kart3(550,300, 100,100)
  kart4 = new Kart4(700,300, 100,100)

  button1 = createImg("button.svg");
  button1.position(110,350)
  button1.size(30,30)
  
  
  button2 = createImg("button.svg");
  button2.position(260,350)
  button2.size(30,30)
  button2.mouseClicked(connect2)

  button3 = createImg("button.svg");
  button3.position(410,350)
  button3.size(40,40)
  button3.mouseClicked(connect3)

  button4 = createImg("button.svg");
  button4.position(560,350)
  button4.size(40,40)
  button4.mouseClicked(connect4)
  con1 = new Connect(train.body ,kart1.body);
  con2 = new Connect(kart1.body ,kart2.body);
  con3 = new Connect(kart2.body ,kart3.body);
  con4 = new Connect(kart3.body ,kart4.body);
  
}


function draw() 
{
  background(bg);
  Engine.update(engine);
  
  //ground.show()
  train.show();
  kart1.show();
  kart2.show();
  kart3.show();
  kart4.show();
  
  con1.display();
  con2.display();
  con3.display();
  con4.display();
//  button1.mouseClicked(connect1);
}

function keyPressed(){

    Matter.Body.setVelocity(train.body, {x: -15,y: 0})
 
  
}


function connect1(){
  var option = {
    bodyA:train,
    bodyB:kart1,
    length: 50,
    stiffness:0.2
  }
  c1 = Constraint.create(option);
  World.add(world,c1);
  
  line(train.body.position.x, train.body.position.y,kart1.body.position.x,kart1.body.position.y)
}



function connect2(){
  var option1 = {
    bodyA:kart1,
    bodyB:kart2,
    length: 50,
    stiffness:0.2
  }
  c2 = Constraint.create(option1);
  World.add(world,c2);
  
  line(kart1.body.position.x, kart1.body.position.y,kart2.body.position.x,kart2.body.position.y)
}



function connect3(){
  var options = {
    bodyA:kart2,
    bodyB:kart3,
    length: 50,
    stiffness:0.2
  }
  c3 = Constraint.create(options);
  World.add(world,c3);
  
  line(kart2.body.position.x, kart2.body.position.y,kart3.body.position.x,kart3.body.position.y)
}



function connect4(){
  var options = {
    bodyA:kart3,
    bodyB:kart4,
    length: 50,
    stiffness:0.2
  }
  c4 = Constraint.create(options);
  World.add(world,c4);
  
  line(kart3.body.position.x, kart3.body.position.y,kart4.body.position.x,kart4.body.position.y)
}
