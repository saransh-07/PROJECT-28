const Engine =  Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
 var boyPng,world,engine,tree,sling,mango1,stone1,ref,mango2,mango3,mango4,mango5,ground,mangoCheck;
function preload(){
	boyPng = loadImage("boy.png");
}
function setup(){
	createCanvas(800,460)
   engine = Engine.create();
   world = engine.world;
   tree = new Tree(640,300,300,300);
   stone1 = new Stone(100,230,40,40);
   sling = new Launcher(stone1.body,{x:100,y:330});
   mango1 = new Mango (630,170,58,58);
   mango2 = new Mango (620,250,40,40);
   mango3 = new Mango (650,280,46,46);
   mango4 = new Mango (700,265,60,60);
   mango5 = new Mango (670,200,60,60);
   mango6 = new Mango (676,260,40,40);
   mango7 = new Mango (550,230,55,55);
   mango8 = new Mango (750,250,37,37);

   ground = new Ground (400,450,800,10);
   mangoCheck = "Tied";
 //ref = Bodies.rectangle(200,200,10,10);
 //World.add(world,ref);
}
function draw(){
	background(120);
	fill ("red");
		Engine.update(engine);
	tree.display();
	stone1.display();
	sling.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	textSize(20);
	text ("Press space to get a second chance to play",300,30);
	imageMode (CENTER);
	image (boyPng,170,380,200,250);
	ground.display();
	detectCollision(mango1,stone1);
	detectCollision(mango2,stone1);
	detectCollision(mango3,stone1);
	detectCollision(mango4,stone1);
	detectCollision(mango5,stone1);
	detectCollision(mango6,stone1);
	detectCollision(mango7,stone1);
	detectCollision(mango8,stone1);
	
	//ref.position.x = mouseX;
	//ref.position.y = mouseY;
	//rect(ref.position.x,ref.position.y,10,10);
	
	//console.log(mouseX);
	//console.log(mouseY);
}

function mouseDragged(){
	if(mangoCheck==="Tied"){
	Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

}
function mouseReleased(){
	sling.fly();
	mangoCheck = "Untied";
}
function detectCollision(lmango,lstone){
	var	MBP = lmango.body.position;
	var SBP = lstone.body.position;
	
	if(MBP.x-SBP.x<lmango.width + lstone.width&&
		SBP.x-MBP.x<lmango.width + lstone.width &&
		SBP.y-MBP.y<lmango.height + lstone.height&&
		MBP.y-SBP.y<lmango.height + lstone.height){
			Matter.Body.setStatic(lmango.body,false);

	}
	
}
function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone1.body,{x:100,y:230});
		sling.attach(stone1.body);
		mangoCheck = "Tied";
	}
}