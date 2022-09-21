const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var up;
var right;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  var options = {
    restitution: 0.95
    }
  ball = Matter.Bodies.circle(200,200,20,options)
  World.add(world,ball);

  up = createImg('up.png');
  up.position(20,30);
  up.size(50,50);
  up.mouseClicked(vForce);

  right = createImg('right.png');
  right.position(70,60);
  right.size(50,50);
  right.mouseClicked(hForce);
 
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse (ball.position.x,ball.position.y,20,20)
  Engine.update(engine);
}

function hForce() {
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0}) 
}

function vForce() {
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.03})
}

