////////board
let board;
let boardWidth = 700;
let boardHeight= 700;
let context;

//// player
let playerWidth = 100;
let playerHeight = 20;
let playerVelocityX =10;

let player = {
  x : boardWidth/2 -playerWidth/2,
  y : boardHeight- playerHeight-5,
  width : playerWidth,
  height : playerHeight,
  velocityX : playerVelocityX
}
///////// ball
let ballWidth = 10;
let ballHeight = 10;
let ballVelocityX = 3;
let ballVelocityY = 2;

let ball = {
  x : boardWidth/2,
  y : boardHeight/2,
  width : ballWidth,
  height : ballHeight,
  velocityX : ballVelocityX,
  velocityY : ballVelocityY
}

window.onload = function(){
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context= board.getContext("2d");////// this is used for drawing on the board


  /////// draw inditial player
  context.fillStyle = "rgb(166, 0, 243)";
  context.fillRect(player.x,player.y,player.width,player.height);

  requestAnimationFrame(update)
  document.addEventListener("keydown",movePlayer);
}
function update(){
  requestAnimationFrame(update);
  context.clearRect(0,0,board.width,board.height) ////// avoid overlapping
  //// player
  context.fillStyle = "rgb(166, 0, 243)";
  context.fillRect(player.x,player.y,player.width,player.height);

  context.fillStyle = "white";
  ball.x += ball.velocityX;
  ball.y += ball.velocityY;
  context.fillRect(ball.x ,ball.y ,ball.width, ball.height);

  ///// bounce ball off walls

  if (ball.y <= 0){
    /// if ball touches top of canvas

    ball.velocityY *= -1;

  } else if (ball.x <= 0 || (ball.x + ball.width)>= boardWidth){
    ///// if ball touches left or right of canvas
    ball.velocityX *= -1;

  }

  else if (ball.y +ball.height >= boardHeight){
    /////  If ball touches bottom of canvas then Game over

  }

}
function outOfBounds(xPosition){
  return (xPosition < 0|| xPosition +playerWidth > boardWidth)
}
function movePlayer(e){

  if (e.code == "ArrowLeft"){
    // player.x -= player.velocityX
    let nextPlayerX = player.x - player.velocityX;
    if(!outOfBounds(nextPlayerX)){
      player.x= nextPlayerX
    }
  } else if (e.code == "ArrowRight"){
    // player.x += player.velocityX
    let nextPlayerX = player.x + player.velocityX;
    if(!outOfBounds(nextPlayerX)){
      player.x= nextPlayerX;
    }
  }
}

