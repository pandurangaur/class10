var ship,ship_1,edges;
var seaImage;
var sea; 
function preload(){
ship_1 = addImage("ship_1","ship_2","ship_3","ship-4");
seaImage = addImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  //create ship
  ship=createSprites(50,150,30,20);
}

function draw() {
  background("blue");
 
}