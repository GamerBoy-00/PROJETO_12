var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage ("path.png")
  boyImg = loadAnimation ("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png")
  bombImg = loadImage("bomb.png")
}


function setup(){
  createCanvas(400,400);
path = createSprite (200,200,150,400)
  path.addImage(pathImg)
path.velocityY = 3
path.scale=1.2;

boy = createSprite(200,200,)
boy.addAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png",)
boy.scale = 0.5
  


leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false
}

function draw() {
  background("black");
  path.velocityY = 4;
  
  boy.x = World.mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary)||boy.collide(rightBoundary)
  
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  




  drawSprites();
}
