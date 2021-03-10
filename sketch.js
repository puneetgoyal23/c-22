const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ground;
var box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

   ground= Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    
    var box_options ={
        restitution: 1.1
    }
    box= Bodies.rectangle(200,100,20,20,box_options);
   World.add(world,box);


    console.log(ground);
}

function draw(){
    background(0,0,0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rectMode(CENTER);
    rect(box.position.x,box.position.y,50,50);
    drawSprite();
}
