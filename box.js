class Box{
    constructor(x,y,width,height) {

var options= {
    isStatic: false,
    restitution:0.2
    
}
this.visibility=255;
this.body=Bodies.rectangle(x,y,width,height,options);
this.width= width;
this.height= height;

World.add(world,this.body);
    }

    display() {
        console.log(this.body.speed);
        if(this.body.speed<10) {
var angle= this.body.angle;
var pos=this.body.position;
push ();
translate(this.body.position.x,this.body.position.y);
rotate(angle);
rectMode(CENTER);
fill ("yellow");
rect(0,0,this.width,this.height);
pop ();
        }
else{
    World.remove(world,this.body);
    push()
    this.Visibility=this.Visibility-5;
    tint (255,this.visibility);
    pop();
}

    }



    }

