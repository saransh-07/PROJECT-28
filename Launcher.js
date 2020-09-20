class Launcher{
constructor(bodyA,pointB){
    var options = {
        length : 0.1,
        stiffness:0.04,
        bodyA:bodyA,
        pointB:pointB
    }
    this.launcher = Constraint.create(options);
    this.pointB = pointB;
    this.bodyA = bodyA;
    World.add(world,this.launcher);
}
fly(){
    this.launcher.bodyA = null;
}
attach(body){
    this.launcher.bodyA = body;
}
display(){
fill ("brown");
if(this.launcher.bodyA)
{
var pointA = this.launcher.bodyA.position;
var pointB = this.pointB;
line (pointA.x,pointA.y,pointB.x,pointB.y);
}
}
}