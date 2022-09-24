//Set global variable that would contain the position, velocity and the html element "ball"
var ball = document.getElementById('ball');
var ball2 = document.getElementById('ball2');
var velocity = 10;
var positionX = 0;
var positionY = 0;
var reverse = false;
var positionX2 = 500
var positionY2 = 0

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 1000;
  var Ymin = 0;
  var Ymax = 1000;

  if (reverse) {
  positionX = positionX - velocity;
  positionY = positionY - velocity;
  ball.style.left = positionX + "px";
  ball.style.top = positionY + "px";
  positionX2 = positionX2 + velocity;
  positionY2 = positionY2 - velocity;
  ball2.style.left = positionX2 + "px";
  ball2.style.top = positionY2 + "px";
  }
  else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
    positionX2 = positionX2 - velocity;
    positionY2 = positionY2 + velocity;
    ball2.style.left = positionX2 + "px";
    ball2.style.top = positionY2 + "px";
  }

  if (positionX > Xmax || positionX === Xmin || positionY > Ymax || positionX === Ymax){
    reverse = !reverse;
  }
  else if (positionX2 > Xmax || positionX2 === Xmin || positionY2 > Ymax || positionX2 === Ymax) {
    reverse = !reverse;
  }
}
// This call the moveBall function every 100ms
setInterval(moveBall, 10);
