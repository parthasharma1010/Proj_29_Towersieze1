const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 
var ground, platform;
var block1, slingshot;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  block1 = new Block(500,360,20,30);
  block2 = new Block(500,360,20,30);
  block3 = new Block(500,360,20,30);
  block4 = new Block(560,360,20,30);
  block5 = new Block(580,360,20,30);
  block6 = new Block(600,360,20,30);

  block7 = new Block(510,330,20,30);
  block8 = new Block(530,330,20,30);
  block9 = new Block(550,330,20,30);
  block10 = new Block(570,330,20,30);
  block11 = new Block(590,360,20,30);
    
  block12 = new Block(520,310,20,30);
  block13 = new Block(540,310,20,30);
  block14 = new Block(560,310,20,30);
  block15 = new Block(580,310,20,30);

  block16 = new Block(530,200,20,30);
  block17 = new Block(550,280,20,30);
  block18 = new Block(570,280,20,30);
  
  block19 = new Block(540,250,20,30);
  block20 = new Block(560,250,20,30);

  block21 = new Block(550,220,20,30);
  block22 = new Block(500,135,20,30);
  block23 = new Block(520,135,20,30);
  block24 = new Block(540,135,20,30);
  block25 = new Block(560,135,20,30);
  block26 = new Block(580,135,20,30);
  block27 = new Block(600,135,20,30);

  ball = new Ball(0,0,50);

  slingshot = new Slingshot(ball.body,{x:200,y:200});

  ground = new Ground(400,390,800,20);

  platform = new Ground(500,400,800,20);

  // createSprite(400, 200, 50, 50);
}

function draw() {
  background(247,223,178);
  Engine.update(engine);
  debug.true;
  
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
  block17.display();
  block18.display();
  block19.display();
  block20.display();

  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();

  block26.display();
  block27.display();
  
  ball.display();
  slingshot.display();
  ground.display();
   
  drawSprites();
}

function mouseDraggod() {
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased() {

  spring.release();
} 