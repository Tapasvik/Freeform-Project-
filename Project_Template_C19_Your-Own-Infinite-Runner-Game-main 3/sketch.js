//variables
var planet, rocket, diamonds, galaxy, meteor;
var planetimg, rocketimg, diamondsimg, galaxyimg, meteorimg;
var points = 0;
var diamondsGrp;

//gamestates
var PLAY=1;
var END=0;
var gameState=1

//loadimgs
function preload(){
planetimg = loadImage("Planet.png")
rocketimg = loadImage("rocket.png")
diamondsimg = loadImage('Diamond.png')
galaxyimg = loadImage("Galaxy.png")
meteorimg = loadImage("meteor.png")

}


function setup() {
 createCanvas(600,600)

 //create bg 
 galaxy = createSprite(600,600)
 galaxy.addImage("galaxyimg")
 galaxy.velocityY = 10

 rocket = createSprite(World.mouseX, World.mouseY)
 rocket.addImage("rocketimg")
 
 diamondsGrp = new Group()

}

function draw() {

    if(gameState===PLAY){
    background(0);
    rocket.x = World.mouseX;
    
    edges= createEdgeSprites();
    rocket.collide(edges);
    
   
  

  
    if(path.y > height ){
      path.y = height/2;
     }
    
      creatediamonds();
  
      if (diamonds.isTouching(rocket)) {
        diamonds.destroyEach();
        points=points + 50;
      }
      
        
      }else{
        if(swordGroup.isTouching(meteor)) {
          gameState=END;
          
          
          
        meterorgrp.destroyEach();
          diamondsG.destroyEach();
         
          
          diamondsGrp.setVelocityYEach(0);
          meterorgrpGroup.setVelocityYEach(0);
       
      }
    }
    
    drawSprites();
    textSize(20);
    fill(255);
    text("Points: "+ points,width-150,30);
    }
  
  
  
  function createCash() {
    if (World.frameCount % 200 == 0) {
    var diamonds = createSprite(Math.round(random(50, width-50),40, 10, 10));
    diamonds.addImage(diamondsimg);
    diamonds.scale= 1.2;
    diamonds.velocityY = 5;
    diamonds.lifetime = 200;
    diamonds.add(diamonds);
    }
  }
  
  function createmeteor() {
    if (World.frameCount % 320 == 0) {
    var meteor = createSprite(Math.round(random(50, width-50),40, 10, 10));
    meteor.addImage(meteorimg);
    meteor.scale=0.03;
    meteor.velocityY = 5;
    meteor.lifetime = 200;
    meteor.add(meteor);
  }
  }
  

  
  

  