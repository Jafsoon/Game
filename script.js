////////board
let board;
let boardWidth = 700;
let boardHeight= 700;
let context;



window.onload = function(){
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context= board.getContext("2d");////// this is used for drawing on the board
}