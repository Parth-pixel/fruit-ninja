  var alien2group,alien,alien5;
  var fruits,fruit1,fruit2,fruit3,fruit4,fruitsgroup,fruit;
  var gameover;
  var sword,swordImage;
  var PLAY=1;
  var END=0;
  var gamestate=PLAY;
  var score;
  var gameover,gameoversound,knifesound;
  var position;
function preload(){
    swordImage = loadImage("sword.png");
   gameover = loadImage("gameover.png")
   fruit1 = loadImage("fruit1.png");
    fruit2 = loadImage("fruit2.png");
    fruit3 = loadImage("fruit3.png");
    fruit4 = loadImage("fruit4.png");
    alien = loadAnimation("alien1.png","alien2.png");
    gameoversound = loadSound("gameover.mp3");
    knifesound = loadSound("knifeSwooshSound.mp3");
}
function setup(){
   createCanvas(600,400); 
    background("white");
    sword = createSprite(30,200,20,20);
    sword.addImage(swordImage);
    sword.scale = 0.5;
    score = 0;
  
     alien2group = createGroup();
    fruitsgroup = createGroup();
}

function draw(){
    background("lightblue");

    if (gamestate===PLAY){
   
    sword.y = World.mouseY;
    sword.x = World.mouseX;
    fruits45();
    enemy();
    
 if (sword.isTouching(fruitsgroup)){
       fruitsgroup.destroyEach();
        score = score+1;
       knifesound.play();
   }
 else 
 {
   if(sword.isTouching(alien2group)){
        gamestate=END;
         fruitsgroup.destroyEach();
        alien2group.destroyEach();
        fruitsgroup.setVelocityXEach(0);
          alien2group.setVelocityXEach(0);
          gameoversound.play();
        sword.addImage(gameover);
      
       }
  }
  
  }
  
     drawSprites();
    text("Score: "+ score, 500,50);
}
function fruits45(){
 if(frameCount%80===0){
      fruit = createSprite(30,50,200,200);
     position = Math.round(random(1,2));
     fruit.scale = 0.2;
     if (position == 1){
      fruit.x = 400;
      fruit.velocityX = -(7+3*score/4);
}
  else if(position == 2){
        fruit.x = 0;
        fruit.velocityX = +(7+3*score/4);
  }
     r=Math.round(random(1,4));
     if(r===1){
       fruit.addImage(fruit1);
   } else if(r===2){
       fruit.addImage(fruit2);
   }else if(r===3){
       fruit.addImage(fruit3);
}else if(r===4){
    fruit.addImage(fruit4);
}  
     fruit.y = Math.round(random(50,400))
    // fruit.velocityX = 7
     fruit.setLifetime = 100;
    fruitsgroup.add(fruit);
 }
  
  
}

function enemy(){
  if (frameCount%200===0){
        alien5 = createSprite(50,30,200,200);
        alien5.addAnimation("moving",alien);
        alien5.velocityX = (8+3*score/10);
        alien5.y = Math.round(random(100,300));
        alien5.setLifetime = 200;
        alien2group.add(alien5);
  }
}

