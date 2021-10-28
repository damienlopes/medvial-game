const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var floor1, floor2;
var wall1
var soldier1
var rock1;

function preload() {
  backimg = loadImage("assets/bg.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  floor1 = new Floor(600, 590, 1200, 50);
  floor2 = new Floor(100, 500, 300, 150);
  rock1 = new Rock(200,200,100,100)
   soldier1 = new Soldier(800,500,150,150)
   wall1 = new wallnot (400,500,150,150)
}

function draw() {
  background(backimg);
  Engine.update(engine);

  floor1.display();
  floor2.display();
  rock1.display();
  soldier1.display();
  wall1.display();
}


//function mouseDragged() {
//  Matter.Body.setPosition(bird.bird, { x: mouseX, y: mouseY });
//}

// function mouseReleased() {
//   con1.birdbreaker();
//   Matter.Body.applyForce(bird.bird, bird.bird.position, { x: 0.3, y: .05 });
// }
