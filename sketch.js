var iron, iron_run, iron_dead;
var bg, backgroundImg;
var brickImg,brickGroup;
var coinImg,coinGroup ;
var coinScore=0;
function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  iron_run = loadImage("images/iron.png");
  brickImg = loadImage("images/stone.png");
  coinImg = loadImage("images/diamond.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale = 2;
  iron = createSprite(300,100,50,50);
 iron.addImage(iron_run)
  iron.scale = 0.3;

  brickGroup = new Group()
  coinGroup  = new Group ()
}

function draw() {
bg.velocityX=-5;
  if (bg.x < 100){
  bg.x=bg.width/5;
  }
  if(iron.x<200){
    iron.x=200;
  }

  if(iron.y<50){
    iron.y=50;
  }

  if(keyDown("up") ) {
    iron.y = iron.y - 3;
  }

  if(keyDown("left") ) {
    iron.x = iron.x -6;
  }
  if(keyDown("right") ) {
    iron.x = iron.x+ 6;
  }
iron.velocityY = iron.velocityY + 0.3;
  generateCoins();

  generateBricks();
  for(var i = 0 ; i< (brickGroup).length ;i++){
    var temp = (brickGroup).get(i) ;
    
    if (temp.isTouching(iron)) {
      iron.collide(temp);
     
  }
}
for(var i = 0; i< (coinGroup).length ;i++){
  var temper = (coinGroup).get(i);

  if(temper.isTouching(iron)){
    coinScore++;
    temper.destroy();
    temper=null;
  }
   
  if ( temper.isTouching(iron)){
    iron.collide(temp);
  }
}  
text("Coins Collected:"+ coinScore, 500,50);
drawSprites();
function generateCoins(){
if(frameCount % 90 ==0){
  var coin = createSprite(1200,120,40,10);
  coin.y =  random(50,450);
 coin.addImage(coinImg);
  coin.scale=0.4;
  coin.velocityX = -5;
    
    coin.lifetime =250;
    coinGroup.add(coin);
}




}

function generateBricks() {
  if (frameCount % 70 === 0) {
    var brick = createSprite(1200,120,40,10);
    brick.y = random(50,450);
    brick.addImage(brickImg);
    brick.scale = 0.5;
    brick.velocityX = -5;
    
    brick.lifetime =250;
    brickGroup.add(brick);
  }
}
}
