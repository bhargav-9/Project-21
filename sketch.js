var bullet , wall, thickness;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,50);
  bullet=createSprite(50,200,40,15);
  bullet.shapeColor="white";
  wall=createSprite(1200,200,thickness,height/2)
  
}

function draw() {
  background(0,0,0);  
  bullet.velocityX= speed;
  if (hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(Math.pow(thickness,3));
if (damage>10)
{
  bullet.shapeColor=color(255,0,0);
}
else{
bullet.shapeColor=color(0,255,0)
}
}
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
   bulletRightEdge=lbullet.x+lbullet.width;
   wallLeftEdge=lwall.x;
   if(bulletRightEdge>=wallLeftEdge){
     return true
   }
   return false
}