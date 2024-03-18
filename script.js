const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const canvasWidth = canvas.offsetWidth;
const canvasHeight = canvas.offsetHeight;

const size = 15;
const speedGame = 80;

ctx.beginPath();
ctx.rect(0, 0, canvasWidth, canvasHeight);
ctx.fillStyle = "#ffffffff";
ctx.lineWidth = 0;
ctx.shadowColor = "#ffffffff";
ctx.shadowBlur = 0;
ctx.fill();


var snake = [
    { x: 20, y: 20 },
    { x: 19, y: 20 },
    { x: 19, y: 19 },
    { x: 19, y: 18 },
    { x: 19, y: 17 },
    { x: 19, y: 16 },
];

var arry = [];
for (i = 0; i < canvasWidth / size; i++) {
    arry[i] = [];
    for (j = 0; j < canvasWidth / size; j++) {
        for (s = 0; s < snake.length; s++) {
            if (i == snake[s].x && j == snake[s].y) {
                ctx.beginPath();
                ctx.rect(size * i, size * j, size, size);
                ctx.fillStyle = "#ffffffff";
                ctx.lineWidth = 0;
                ctx.shadowColor = "#ffffffff";
                ctx.shadowBlur = 0;
                ctx.fill();
            }
        }
    }
}

var direction = 'ArrowRight';


function createRandom() {
    return Math.floor(Math.random() * canvasWidth / size);
}
var foodPosation = { x: createRandom(), y: createRandom() }
console.log(foodPosation)
function createFood() {
    return foodPosation = { x: createRandom(), y: createRandom() }
}
function showFood(foodPosation) {

    ctx.beginPath();
    ctx.arc(foodPosation.x * size + size / 2, foodPosation.y * size + size / 2, size / 2, 0, 360);
    ctx.fillStyle = "#13970b";
    ctx.lineWidth = 2;
    ctx.shadowColor = "#13970b";
    ctx.shadowBlur = 15;
    ctx.fill();
    ctx.closePath();

}

window.addEventListener('keydown', (e) => {
    if (
        (direction == 'ArrowRight' || direction == 'ArrowLeft')
        && (e.key != 'ArrowRight' && e.key != 'ArrowLeft')
    ) {
        direction = e.key;
    } else if (
        (direction == 'ArrowUp' || direction == 'ArrowDown')
        && (e.key != 'ArrowUp' && e.key != 'ArrowDown')
    ) {
        direction = e.key;
    }
});
function moveSnake(snake) {
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#eeeeee88";
    ctx.fill();

    snake.pop();
    showFood(foodPosation);


    for (i = 0; i < snake.length; i++) {
        if (i == 0) {
            ctx.beginPath();
            ctx.rect(size * snake[i].x, size * snake[i].y, size, size);
            ctx.fillStyle = "#000";
            ctx.lineWidth = 0;
            ctx.shadowColor = "#000";
            ctx.shadowBlur = 0;
            ctx.fill();
        } else {
            ctx.beginPath();
            ctx.rect(size * snake[i].x, size * snake[i].y, size, size);
            ctx.fillStyle = "#666";
            ctx.lineWidth = 0;
            ctx.shadowColor = "#666";
            ctx.shadowBlur = 0;
            ctx.fill();
        }
    }

    if (
        (snake[0].x < 0)
        || (snake[0].x >= canvasWidth / size)
        || (snake[0].y < 0)
        || (snake[0].y >= canvasWidth / size)
    ) {
        endGame();
    }
    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            endGame();
        }
    }

    if (snake[0].x == foodPosation.x && snake[0].y == foodPosation.y) {
        growSnake(snake, direction);
        foodPosation = createFood();
        animationFood(snake[0].x, snake[0].y);
    }
}

function animationFood(x, y) {
    var i = 0;
    var animationOnFood = setInterval(() => {
        if (i < 20) {
            ctx.beginPath();
            ctx.arc(x * size + size / 2, y * size + size / 2, i, 0, 360);
            ctx.fillStyle = "#13970b";
            ctx.lineWidth = 0;
            ctx.shadowColor = "#13970b";
            ctx.shadowBlur = 0;
            ctx.fill();
            i++;
        } else {
            clearInterval(animationOnFood)
        }
    }, i);
    i = 0;
}
