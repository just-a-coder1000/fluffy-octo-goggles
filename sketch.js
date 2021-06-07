const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body
const Constraint = Matter.Constraint;

var backgroundImg;
var snow = [];

function preload(){

  backgroundImg = loadImage("snow3.jpg");

}

function setup(){

  createCanvas(1200, 600);
  engine = Engine.create();
    world = engine.world;

}

function draw(){

  background(backgroundImg);

  Engine.update(engine);


  for (var l = 0; l < snow.length; l++){

    snow[l].display();

  }

  if(frameCount%20 === 0){

    snow.push(new Snow(random(100, 1200), 10, 10));

  }

}