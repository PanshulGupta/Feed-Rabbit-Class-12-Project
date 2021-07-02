var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,leafImg,appleImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}


function setup(){
  
  createCanvas(400,400);
  garden=createSprite(200,200);
  garden.addImage(gardenImg);


  rabbit = createSprite(160,340,20,20);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  rabbit.x = World.mouseX;
  drawSprites();

  createEdgeSprites();

  
  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } 
    
    else {
      createLeafe();
    }
  
  }



}

function createApples() {
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;

  if (rabbit.isTouching(apple)){
    apple.destroy()
  }
  
}

function createLeafe() {
  leaf = createSprite(random(50, 350),40, 10, 10);
  leaf.addImage(leafImg);
  leaf.scale=0.08;
  leaf.velocityY = 3;

  if (rabbit.isTouching(leaf)){
    leaf.destroy()
  }

}



