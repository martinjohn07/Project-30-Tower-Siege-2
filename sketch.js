const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint;
var engine,world
function setup() {
  createCanvas(1200,700);

	engine = Engine.create();
  world = engine.world;
  
//create bodies here
ground = new Ground(width/2, height-10,width,20)
stand1=new Ground(500,height-185,300,20)
stand2=new Ground(1000,height-300,300,20)
polygonObj=new Polygon(100,500,50,50)
slingshot=new Sling(polygonObj.body,{x:100,y:200});


//create boxes

//STAND 1
//layer 1
box1=new Box(400,500,50,50)
box2=new Box(450,500,50,50)
box3= new Box(500,500,50,50)
box4=new Box(550,500,50,50)
box5=new Box(600,500,50,50)

//layer 2
box6=new Box(500,400,50,50)
box7=new Box(550,400,50,50)
box8=new Box(450,400,50,50)
box9=new Box(500,300,50,50)

//STAND 2
//layer 1
box10=new Box(1000,300,50,50)
box11=new Box(1050,300,50,50)
box12=new Box(950,300,50,50)
box13=new Box(1100,300,50,50)
box14=new Box(900,300,50,50)

//layer 2
box15=new Box(1000,300,50,50)
box16=new Box(1050,300,50,50)
box17=new Box(950,300,50,50)

//layer 3
box18=new Box(1000,300,50,50)


  Engine.run(engine);
  
}

function draw() {
  
  background(0);
  Engine.update(engine)  
  imageMode (CENTER)
  //display bodies
    ground.display()
    
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    stand1.display()
    stand2.display()
    polygonObj.display()
    slingshot.display()

}

function keyPressed(){
	if(keyCode === 20){
        Matter.Body.setPosition(polygonObj.body, {x:150,y:550})
		slingshot.attach(polygonObj.body)
	}
}

function mouseDragged(){
    Matter.Body.setPosition(polygonObj.body, {x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
if (keyCode === 32) {
slingshot.attach(polygonObj.body);

} 


}

