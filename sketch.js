const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];
var ground;
var divisionHeight = 300

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  engine = Engine.create()
    world = engine.world;
    ground = new Ground(width/2,height,width,20);
    for(var k = 0; k<=width;k=k+80){
      divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
    }
    for(var j = 75;j<=width;j=j+50){
plinkos.push(new Plinko(j,75))
    }
    for(var j = 50;j<=width;j=j+50){
      plinkos.push(new Plinko(j,175))
          }
}
function draw() {
  background(255,255,255);  
  Engine.update(engine)
  ground.display()
  if(frameCount%60===0){ particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); score++; }
  for(var i = 0;i<plinkos.length;i++){
plinkos[i].display()
  }
  for(var i = 0;i<divisions.length;i++){
    plinkos[i].display()
      }
      for(var i = 0;i<particles.length;i++){
        plinkos[i].display()
          }
}
