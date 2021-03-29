var database;
var backimg;
var gameState = 0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1img, fruit2img, fruit3img, fruit4img, fruit5img;
var playerimg;

function preload(){
  backimg = loadImage("images/jungle.jpg");
  playerimg = loadImage("images/basket2.png");
  fruit1img = loadImage("images/apple2.png");
  fruit2img = loadImage("images/banana2.png");
  fruit3img = loadImage("images/melon2.png");
  fruit4img = loadImage("images/orange2.png");
  fruit5img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600); 

  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(backimg);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}