const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
	platform = new Ground(150, 305, 300, 170);
	mango1 = new Mango(200,200,40);
	mango2 = new Mango(300,200,40);
	mango4= new Mango(400,200,40);
	mango5= new Mango(500,200,40);
stone=new Stone(100,200,40)

  

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
	Engine.update(engine);
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	stone.display();

	detectollision(stone,mango1);
	detectollision(stone,mango2);
	detectollision(stone,mango3);
	detectollision(stone,mango4);
	detectollision(stone,mango5);

    //strokeWeight(4);
  
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(bird.body);
    }
}

function detectollision(Lstone,Lmango){
mangoBodyPosition=lmango.boby.position
stoneBodyPostion=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance=>lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}
}