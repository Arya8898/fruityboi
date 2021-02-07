var sword,swordImage,swordsound;

var fruitgroup,fruit1,fruit2,fruit3,fruit4,fruitImage;

var randomFruit,r;

var aliengroup,alienImage,gameOverImage;

var PLAY=1,END=0,gameState=1;

function preload(){
  swordImage = loadImage("sword.png");
  
  fruit1Image = loadImage("fruit1.png");
  fruit2Image = loadImage("fruit2.png");
  fruit3Image = loadImage("fruit3.png");
  fruit4Image = loadImage("fruit4.png");
 
  alienImage =loadImage("alien1.png","alien2.png");
  
  gameOverImage=loadImage("gameover.png");
  
}
function setup(){
  createCanvas(600,600);
  
  sword = createSprite(40,20,200,200);
  sword.addImage(swordImage);
  sword.scale = 0.7;
  
  sword.setCollider("rectangle",0,0,40,40);
  
  score=0;
  
  fruitG = new Group ();
  alienG = new Group ();
}
function draw(){
  background("lightblue");
  if(gameState===PLAY){
   fruit();
   Enemy(); 
  sword.y = World.mouseY;
  sword.x = World.mouseX;
  if(fruitGroup.isTouching(sword)){
    friutGroup.destroyEach();
    score=score+2;
  }  
  }  
  drawSprite();
}


function fruitGroup(){
  fruit1 = createSprite(50,180,240,400);
  fruit1.addImage(fruit1Image);
  
  fruit2 = createSprite(50,180,240,400);
  fruit2.addImage(fruit2Image);
  
  fruit3 = createSprite(50,180,240,400);
  fruit3.addImage(fruit3Image);
  
  fruit4 = createSprite(50,180,240,400);
  fruit4.addImage(fruit4Image);
  
  fruitG.add(fruit1);
  fruitG.add(fruit2);
  fruitG.add(fruit3);
  fruitG.add(fruit4);
  
 // ground.depth = fruitGroup.depth;
  //fruitGroup.depth = fruitGroup.depth + 1;
}