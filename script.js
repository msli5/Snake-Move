var snakeX=200;
var snakeY=200;

function setup() {
  // Code here runs only once
  createCanvas(600, 600);
}

function draw() {
  // Code here runs continuously
  background(255);

  //drawGrid() is referenced to the drawGrid.js file. You can hide the grid by adding "//" in front of it. If you want to see the grid OVER your sketch, move it to the line before }.
  drawGrid()
  stroke(0)

//simple snake
  fill("green")
rect(snakeX,snakeY,60,20)

  //activate keyIsPressed
if(keyIsPressed==true){
 if(keyCode==39){
   //right arrow
   snakeX+=5
 } 
//left arrow
  if(keyCode==37){
    snakeX-=5
  }

  //up arrow
  if(keyCode==38){
    snakeY-=5
  }

  //down arrow
  if(keyCode==40){
    snakeY+=5
  }
  
}


  

}

