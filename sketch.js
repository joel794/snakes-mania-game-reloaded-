var snake;
var food;
var h, w;
var tile=20;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth/2, windowHeight/2);

	w = floor(width/tile);
	h = floor(height/tile);

	frameRate(5);

	var gameOver = createSprite(displayWidth/2, displayHeight/2 - 100);

	snake = new Snake();
	foodLocation();
}

function draw() {
	scale(tile);
  background(200);

  fill(0)
  textSize(20)
  text("welcome to the nokia snakes mania game",500,400);
  text("use the arrow keys to move the snake",560,400);

  if(snake.eat(food)){
	foodLocation();
  }

  snake.update();
  snake.display();

  if(snake.endGame()){
	background(118,110,106);

	noStroke();
	fill(255);
	textSize(30);
	text("Game Over", width/2 - 100, height/2);
  }

  noStroke();
  fill(237,235,223);
  ellipse(food.x, food.y, 1, 1);

  drawSprites();
}

function foodLocation(){
	var x = floor(random(w));
	var y = floor(random(h));

	food = createVector(x, y);
}

function keyPressed(){
	if(keyCode===LEFT_ARROW){
		snake.setDir(-1, 0);
	} else if(keyCode===RIGHT_ARROW){
		snake.setDir(1, 0);
	} else if(keyCode===UP_ARROW){
		snake.setDir(0, -1);
	} else if(keyCode===DOWN_ARROW){
		snake.setDir(0, 1);
	} else if(key===" "){
		snake.grow();
	}
}