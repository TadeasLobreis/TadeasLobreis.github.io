import { home_url } from "./env.js";


const board_background = "rgb(250, 250, 210)";
const snake_col = 'grey';
const snake_border = 'black';

let snake = [
    {x: 200, y: 200},
    {x: 180, y: 200},
    {x: 160, y: 200},
    {x: 140, y: 200},
    {x: 120, y: 200}
]
let changing_direction = false;
// Horizontal velocity
let dx = 20;
// Vertical velocity
let dy = 0;
let score = 0;
let food_x;
let food_y;


// Get the canvas element and resize to fullscreen
const snakeboard = document.getElementById("snakeboard");
snakeboard.width  = window.innerWidth;
snakeboard.height = window.innerHeight;


 console.log("hello");
// Return a two dimensional drawing context
const snakeboard_ctx = snakeboard.getContext("2d");
// Start game

main()
gen_food();

document.addEventListener("keydown", change_direction);
document.addEventListener("keydown",start_game)


    // main function called repeatedly to keep the game running
// main function called repeatedly to keep the game running
function main() 
{  
   if (has_game_ended()){
    setTimeout(function onTick(){
    var imgReplace = document.getElementsByClassName("space")[0];
    imgReplace.style.visibility = "visible";
    var arrow = document.getElementsByClassName("snake-drop")[0];
    arrow.style.visibility = "hidden";
   } ,1000)
   return;
  }

   changing_direction = false;
   setTimeout(function onTick() 
   { 
    clear_board();
    drawFood();
    move_snake();
    drawSnake();
     
     // Call main again
    main();
   }, 100)
}
function start_game(event){
  const space_bar = 32;
  const keyPressed = event.keyCode;
  if (keyPressed === space_bar && has_game_ended()) {
    
  }

}
// draw a border around the canvas
function clear_board() {
  //  Select the colour to fill the drawing
    snakeboard_ctx.fillStyle = board_background;
  //  Select the colour for the border of the canvas
    
  // Draw a "filled" rectangle to cover the entire canvas
    snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
  // Draw a "border" around the entire canvas
    
    
    
}

// Draw the snake on the canvas
function drawSnake() {
  // Draw each part
  snake.forEach(drawSnakePart)
}
function drawFood() {
  snakeboard_ctx.fillStyle = 'red';
  snakeboard_ctx.strokestyle = 'black';
  snakeboard_ctx.fillRect(food_x, food_y, 20, 20);
  snakeboard_ctx.strokeRect(food_x, food_y, 20, 20);
}
// Draw one snake part
function drawSnakePart(snakePart) {

  // Set the colour of the snake part
  snakeboard_ctx.fillStyle = snake_col;
  // Set the border colour of the snake part
  snakeboard_ctx.strokestyle = snake_border;
  // Draw a "filled" rectangle to represent the snake part at the coordinates
  // the part is located
  snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 20, 20);
  // Draw a border around the snake part
  snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 20, 20);
}


function has_game_ended() {
    for (let i = 4; i < snake.length; i++) {
      if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
    }
    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > snakeboard.width - 20;
    const hitToptWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > snakeboard.height - 20;
    return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
  }
function random_food(min, max) {

  return Math.round((Math.random() * (max-min) + min) / 20) * 20;
}
function gen_food() {
  // Generate a random number the food x-coordinate
  food_x = random_food(0, snakeboard.width - 20);
  // Generate a random number for the food y-coordinate
  food_y = random_food(0, snakeboard.height - 20);
  // if the new food location is where the snake currently is, generate a new food location
  snake.forEach(function has_snake_eaten_food(part) {
    const has_eaten = part.x == food_x && part.y == food_y;
    if (has_eaten) gen_food();
  });
}
function change_direction(event) {
  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;
    
  // Prevent the snake from reversing
  
  if (changing_direction) return;
  changing_direction = true;
  const keyPressed = event.keyCode;
  const goingUp = dy === -20;
  const goingDown = dy === 20;
  const goingRight = dx === 20;
  const goingLeft = dx === -20;
  if (keyPressed === LEFT_KEY && !goingRight) {
      dx = -20;
      dy = 0;
    }
  if (keyPressed === UP_KEY && !goingDown) {
      dx = 0;
      dy = -20;
    }
  if (keyPressed === RIGHT_KEY && !goingLeft) {
      dx = 20;
      dy = 0;
    }
  if (keyPressed === DOWN_KEY && !goingUp) {
      dx = 0;
      dy = 20;
  }
}

function move_snake() {
    // Create the new Snake's head
  const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    // Add the new head to the beginning of snake body
  snake.unshift(head);
  const has_eaten_food = snake[0].x === food_x && snake[0].y === food_y;
  if (has_eaten_food) {
    // Increase score
    score += 1;
    snake.unshift(head);
    snake.unshift(head);
    snake.unshift(head);
    
    
    
    // Display score on screen
    document.getElementById('score').innerHTML = score;
    // Generate new food location
    gen_food();
  } else {
      // Remove the last part of snake body
    snake.pop();
    }
  }

window.aboutMe = function() {
    location.href = home_url + "/aboutme";
    console.log('works');
    
}
window.Resume = function() {
  location.href = "https://tadeaslobreis.github.io/Resume";
}
window.link = function() {
  window.open("http://www.linkedin.com/in/tadeas-lobreis", '_blank'); 
}
window.git = function() {
  window.open("https://github.com/TadeasLobreis?tab=repositories", '_blank'); 
}
window.contact = function() {
  location.href = home_url + "/contact";
}

