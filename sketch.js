var ball 


function setup() {
  createCanvas(800,800);
  ball = createSprite(400,400,100,100)
  ball.shapeColor = 'green'
}

function draw() 
{
  background('blue');
  if (keyDown('left')) {
    ball.x -= 2
  }
  if (keyDown('right')) {
    ball.x += 2
  }
  if (keyDown('up')) {
    ball.y -= 2
  }
  if (keyDown('down')) {
    ball.y += 2
  }
  drawSprites()
}




