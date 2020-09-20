class Stone {
    constructor(x,y,width,height){
    var options = {
        isStatic:false,
        friction : 1,
        restitution:0,
        density:1.2
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("stone.png");
        World.add(world,this.body);
    }
    

    
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}