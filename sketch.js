var canvas, backgroundImage;
var kyoga1;
var gameState = 1;
var playerCount;
var kids,adults,elders,b1,b2,b3,slogan;
var database;
var bg,bg1,bg2,kidsimg,adultsimg,eldersimg,sloganImg,st;
var form, player, game;
var sukhasana;
function preload(){
  bg=loadImage("bg.jpg");
  bg1=loadImage("bg2.jpeg");
  bg2=loadImage("bg4.jpg");
  kidsimg=loadImage("kids yoga.jpg");
  adultsimg=loadImage("adults yoga.jpg");
  eldersimg=loadImage("elder yoga.jpg");
  sloganImg=loadImage("s.jpg");
  st=loadImage("start.png")
  kyoga1=loadImage("kyoga1.png");
  sukhasana=loadImage("sukhasana.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  //game.getState();
  game.start();
}


function draw(){
  if(gameState===1){
    background(bg2);
    game.play();
  }
 else if(gameState===2){
  
   background(bg1);
   game.kidsyoga();
 }
 else if (gameState===3){
   background(bg1);
 image(sukhasana,displayWidth-500,100,200,200);
 }
}
