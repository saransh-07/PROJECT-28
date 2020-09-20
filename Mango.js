class Mango{

    constructor(x,y,width,height){


        var options  = {
            isStatic:true,
            restitution:0,
            friction:0.4
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }
    display(){
        push ();
        var angle=this.body.angle;
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop ();
    }
}