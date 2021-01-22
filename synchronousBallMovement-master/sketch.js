var hypnoticBall, database;
var position;

var player;
var form;
var game; //first work on this one

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  
}
