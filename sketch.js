var block;


function setup() {
  createCanvas(1500,800);
  block = createSprite(750, 400, 90, 45);
  block.shapeColor = "white";
}

function draw() 
{
background(0);
if(keyDown(LEFT_ARROW))
{
  block.x -= 5;
  background("#ff0000");
}
if(keyDown(RIGHT_ARROW))
{
  block.x += 5;
  background("#0000ff")
}
if(keyDown(UP_ARROW))
{
  block.y -= 5;
  background("#00ff00")
}
if(keyDown(DOWN_ARROW))
{
  block.y += 5;
  background("#ff9600")
}
drawSprites();
}






