var movingrect, fixedrect;
function setup() {
  createCanvas(800,400);
  movingrect=createSprite(200, 200, 50, 50);
  fixedrect=createSprite(400, 200, 100, 50);
}

function draw() {
  background("pink"); 
  movingrect.x=World.mouseX;

  drawSprites();
}