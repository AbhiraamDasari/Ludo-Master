var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var gameBoard,gbimg;
var  diceimg,diceimg1,diceimg2,diceimg3;
var diceimg4,diceimg5,diceimg6;
var diceobj;
function preload(){
gbimg =  loadImage("images/ludo img.jpg");
diceimg = loadImage("images/dice main.png");
diceimg1 = loadImage("images/dice-1.png");
diceimg2 = loadImage("images/dice-2.png");
diceimg3 = loadImage("images/dice-3.png");
diceimg4 = loadImage("images/dice-4.png");
diceimg5 = loadImage("images/dice-5.png");
diceimg6 = loadImage("images/dice-6.png");
} 

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  //var dice = createSprite(200,200,45,45);
  game.getState();
  game.start();
 diceobj = new Dice();
}



function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    gameBoard = createSprite(displayWidth/2 , displayHeight/2 );
    gameBoard.addImage("ludop",gbimg);
    //game.play();
    diceobj.display();
  }
  if(gameState===2){
    game.end();
  }
  drawSprites();
}

