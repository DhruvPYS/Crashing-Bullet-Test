var bullet, speed, wall, weight, damage;




function setup() {
  createCanvas(1600,400);
  thickness = random(22,83)

  bullet = createSprite(50,200,50,5)
  wall = createSprite(1200,200,thickness,height/2)
  bullet.shapeColor = "blue"
  wall.shapeColor = "black"
  speed = random(55,90)
  weight = random(400,1500) 
  bullet.velocityX = speed;


}

function draw() {
  
  background("white")
  background(255,255,255);  
  wall.depth = bullet.depth + 1

  if(Collision(bullet, wall))
  {

      bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
    console.log(damage)
  }


  if(damage > 10)
  {
    wall.shapeColor = "red"
  }
  if(damage < 10) 
  {
    wall.shapeColor = "green"
  }
      

  drawSprites();

}

function Collision(b, w)
{
bulletRightEdge = b.x + b.width 
wallLeftEdge = w.x
if(bulletRightEdge >= wallLeftEdge)
{
return true
}
return false
}