class Ball {
    constructor(x,y,radius){
     var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
     }
     this.body=Bodies.circle(x,y,width);
     this.width=radius;
     World.add(world.this.body);
    }
    display(){
     var pos = this.body.position;
     ellipseMode(RADIUS);
     fill("white");
     ellips(pos.x,pos.y,width);
    }
}