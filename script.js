// Snake game (Demo)

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const canvasWidth = canvas.offsetWidth;
const canvasHeight = canvas.offsetHeight;

const size = 15;

ctx.beginPath();
ctx.rect(0, 0, canvasWidth, canvasHeight);
ctx.stroke();


var snake = [
    { x: 20, y: 20 },
    { x: 19, y: 20 },
    { x: 19, y: 19 },
    { x: 19, y: 18 },
    { x: 19, y: 17 },
    { x: 19, y: 16 },
];

var arry = [];
for (i = 0; i < 40; i++) {
    arry[i] = [];
    for (j = 0; j < 40; j++) {
        for (s = 0; s < snake.length; s++) {
            if (i == snake[s].x && j == snake[s].y) {
                ctx.beginPath();
                ctx.rect(size * i, size * j, size, size);
                ctx.stroke();
            }
        }
    }
}

var direction = 'ArrowRight';


function createRandom() {
    return Math.floor(Math.random() * 40);
}
var foodPosation = { x: createRandom(), y: createRandom() }
console.log(foodPosation)
function createFood() {
    return foodPosation = { x: createRandom(), y: createRandom() }
}
function showFood(foodPosation) {
    ctx.beginPath();
    ctx.rect(foodPosation.x * size, foodPosation.y * size, size, size);
    ctx.stroke();
}