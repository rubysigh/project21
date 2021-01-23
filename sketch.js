var canvas;
var music;
var box;
var surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1=createSprite(100,585,180,20);
surface1.shapeColor="pink";
surface2=createSprite(300,585,180,20);
surface2.shapeColor="yellow";
surface3=createSprite(500,585,180,20);
surface3.shapeColor="green";
surface4=createSprite(695,585,180,20);
surface4.shapeColor="blue";
    //create box sprite and give velocity
box=createSprite(random(20,750),60,100);
box.shapeColor="white";
box.velocityY=6;
box.velocityX=-6;
}


function draw() {
    background(0);
    //create edgeSprite
edges=createEdgeSprites();
box.bounceOff(edges);


if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor="pink";
    box.velocityY=0;
    box.velocityX=0;
    music.stop();
} 
if(surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor="yellow";
}
if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor="blue";
}

if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor="green";
    music.play(); 
}




drawSprites();
 
}
