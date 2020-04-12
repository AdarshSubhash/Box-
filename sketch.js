var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;

 var ground;
var gSlider;

 
function setup() {
    createCanvas(400, 400);
 engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);

 
    
function mousePressed() {
  if(mousePressedOver(canvas)){
    new Box();
}
}
}
function draw() {
      background(51);
   var fVal = gSlider.value();
 
  
  
  

    


    
}
 
