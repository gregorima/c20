const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine;
var world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var rock;
var ball2;
var ball3;
var recite;


function setup() {
  
  createCanvas(windowWidth, windowHeight);
  engine = Matter.Engine.create();
  world = engine.world;


  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }

  var rock_options = {
    restituition : 0.9,
    frictionAir : 0.009
  }

  var ball2_options = {
    restitution : 0.25,
    frictionAir : 0.01
  }

  var ball3_options = {
    restitution : 0.72,
    frictionAir : 0.01
  }

  var recite_options = {
    restitution : 0.90,
    frictionAir : 0.001
  }

  rock = Matter.Bodies.circle(300, 40, 35, rock_options);
  Matter.World.add(world, rock);

  ball = Matter.Bodies.circle(200,80,30,ball_options);
  Matter.World.add(world,ball);

  ball2 = Matter.Bodies.circle(100,90,30,ball2_options);
  Matter.World.add(world,ball2);
  ball3 = Matter.Bodies.circle(350,40,30,ball3_options);
  Matter.World.add(world,ball3);

  recite = Matter.Bodies.circle(200,80,30,recite_options);
  Matter.World.add(world,recite);




  ground = Matter.Bodies.rectangle(200,390,400,20,ground_options);
  Matter.World.add(world,ground);
  
  rectMode(CENTER);
  ellipseMode(RADIUS); // mudar o raio
}


function draw() 
{
 background (50);
 Matter.Engine.update(engine);

 ellipse(ball.position.x,ball.position.y ,30);
 rect(ground.position.x,ground.position.y ,400,20);
 ellipse(rock.position.x, rock.position.y ,35)
 ellipse(ball2.position.x,ball2.position.y ,30);
 rect(recite.position.x, recite.position.y -35 ,100, 130)
 ellipse(ball3.position.x,ball3.position.y ,40);
}

