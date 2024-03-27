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
    { x: 20, y: 17 },
    { x: 20, y: 18 },
    { x: 20, y: 19 },
    { x: 20, y: 20 },
    { x: 20, y: 21 },
    { x: 20, y: 22 },
    { x: 20, y: 23 },
    { x: 20, y: 24 },
    { x: 20, y: 25 },
    { x: 20, y: 26 },
    { x: 20, y: 27 },
    { x: 20, y: 28 },
    { x: 20, y: 29 },
    { x: 20, y: 30 },
    { x: 20, y: 31 },
    { x: 20, y: 32 },
    { x: 20, y: 33 },
    { x: 20, y: 34 },
    { x: 20, y: 35 },
    { x: 20, y: 36 },
    { x: 20, y: 19 },
    { x: 20, y: 20 },
    { x: 20, y: 21 },
    { x: 20, y: 22 },
    { x: 20, y: 23 },
    { x: 20, y: 24 },
    { x: 20, y: 25 },
    { x: 20, y: 26 },
    { x: 20, y: 27 },
    { x: 20, y: 28 },
    { x: 20, y: 29 },
    { x: 20, y: 30 },
    { x: 20, y: 31 },
    { x: 20, y: 32 },
    { x: 20, y: 33 },
    { x: 20, y: 34 },
    { x: 20, y: 35 },
    { x: 20, y: 36 },
    { x: 20, y: 17 },
    { x: 20, y: 18 },
    { x: 20, y: 19 },
    { x: 20, y: 20 },
    { x: 20, y: 21 },
    { x: 20, y: 22 },
    { x: 20, y: 23 },
    { x: 20, y: 24 },
    { x: 20, y: 25 },
    { x: 20, y: 26 },
    { x: 20, y: 27 },
    { x: 20, y: 28 },
    { x: 20, y: 29 },
    { x: 20, y: 30 },
    { x: 20, y: 31 },
    { x: 20, y: 32 },
    { x: 20, y: 33 },
    { x: 20, y: 34 },
    { x: 20, y: 35 },
    { x: 20, y: 36 },
    { x: 20, y: 19 },
    { x: 20, y: 20 },
    { x: 20, y: 21 },
    { x: 20, y: 22 },
    { x: 20, y: 23 },
    { x: 20, y: 24 },
    { x: 20, y: 25 },
    { x: 20, y: 26 },
    { x: 20, y: 27 },
    { x: 20, y: 28 },
    { x: 20, y: 29 },
    { x: 20, y: 30 },
    { x: 20, y: 31 },
    { x: 20, y: 32 },
    { x: 20, y: 33 },
    { x: 20, y: 34 },
    { x: 20, y: 35 },
    { x: 20, y: 36 },
    { x: 20, y: 17 },
    { x: 20, y: 18 },
    { x: 20, y: 19 },
    { x: 20, y: 20 },
    { x: 20, y: 21 },
    { x: 20, y: 22 },
    { x: 20, y: 23 },
    { x: 20, y: 24 },
    { x: 20, y: 25 },
    { x: 20, y: 26 },
    { x: 20, y: 27 },
    { x: 20, y: 28 },
    { x: 20, y: 29 },
    { x: 20, y: 30 },
    { x: 20, y: 31 },
    { x: 20, y: 32 },
    { x: 20, y: 33 },
    { x: 20, y: 34 },
    { x: 20, y: 35 },
    { x: 20, y: 36 },
    { x: 20, y: 19 },
    { x: 20, y: 20 },
    { x: 20, y: 21 },
    { x: 20, y: 22 },
    { x: 20, y: 23 },
    { x: 20, y: 24 },
    { x: 20, y: 25 },
    { x: 20, y: 26 },
    { x: 20, y: 27 },
    { x: 20, y: 28 },
    { x: 20, y: 29 },
    { x: 20, y: 30 },
    { x: 20, y: 31 },
    { x: 20, y: 32 },
    { x: 20, y: 33 },
    { x: 20, y: 34 },
    { x: 20, y: 35 },
    { x: 20, y: 36 },
    { x: 20, y: 17 },
    { x: 20, y: 18 },
    { x: 20, y: 19 },
    { x: 20, y: 20 },
    { x: 20, y: 21 },
    { x: 20, y: 22 },
    { x: 20, y: 23 },
    { x: 20, y: 24 },
    { x: 20, y: 25 },
    { x: 20, y: 26 },
    { x: 20, y: 27 },
    { x: 20, y: 28 },
    { x: 20, y: 29 },
    { x: 20, y: 30 },
    { x: 20, y: 31 },
    { x: 20, y: 32 },
    { x: 20, y: 33 },
    { x: 20, y: 34 },
    { x: 20, y: 35 },
    { x: 20, y: 36 },
    { x: 20, y: 19 },
    { x: 20, y: 20 },
    { x: 20, y: 21 },
    { x: 20, y: 22 },
    { x: 20, y: 23 },
    { x: 20, y: 24 },
    { x: 20, y: 25 },
    { x: 20, y: 26 },
    { x: 20, y: 27 },
    { x: 20, y: 28 },
    { x: 20, y: 29 },
    { x: 20, y: 30 },
    { x: 20, y: 31 },
    { x: 20, y: 32 },
    { x: 20, y: 33 },
    { x: 20, y: 34 },
    { x: 20, y: 35 },
    { x: 20, y: 36 },
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
var samePosation = false;
var foodPosation = { x: createRandom(), y: createRandom() }
// Fix The Position of Food
function createFood() {
    foodPosation = { x: createRandom(), y: createRandom() }
    samePosation = false;
    for (var i = 0; i < snake.length; i++) {
        if (foodPosation.x == snake[i].x && foodPosation.y == snake[i].y) {
            samePosation = true;
            break;
        }
    }
    if (samePosation == true) {
        console.log('sdf');
        foodPosation = { x: createRandom(), y: createRandom() }
    } else {
        console.log(foodPosation);
    }
    return foodPosation;
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

function moveSnake(snake) {

    window.addEventListener('keydown', (e) => {
        if (e.key == 'ArrowRight' || e.key == 'ArrowLeft' || e.key == 'ArrowDown' || e.key == 'ArrowUp') {
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
        }
    });


    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#eeeeee88";
    ctx.fill();

    // for (i = 0; i < canvasWidth / size; i++) {
    //     for (j = 0; j < canvasWidth / size; j++) {
    //         ctx.beginPath();
    //         ctx.rect(size * j * 2, 0, size, canvasHeight);
    //         ctx.rect(0, size * i * 2 + size, canvasWidth, size);
    //         ctx.fillStyle = "#0000007a";
    //         ctx.lineWidth = 0;
    //         ctx.shadowColor = "#0000007a";
    //         ctx.shadowBlur = 0;
    //         ctx.fill();
    //     }
    // }

    snake.pop();
    showFood(foodPosation);

    if (direction == 'ArrowRight') {
        snake.unshift({ x: snake[0].x + 1, y: snake[0].y });
    } else if (direction == 'ArrowLeft') {
        snake.unshift({ x: snake[0].x - 1, y: snake[0].y });
    } else if (direction == 'ArrowDown') {
        snake.unshift({ x: snake[0].x, y: snake[0].y + 1 });
    } else if (direction == 'ArrowUp') {
        snake.unshift({ x: snake[0].x, y: snake[0].y - 1 });
    }

    for (var i = 0; i < snake.length; i++) {
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
    for (var i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            endGame();
        }
    }

    if (snake[0].x == foodPosation.x && snake[0].y == foodPosation.y) {
        growSnake(snake, direction);
        console.log(createFood())
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

function growSnake(snake, direction) {
    switch (direction) {
        case 'ArrowRight':
            snake.push({ x: snake[snake.length - 1].x + 1, y: snake[snake.length - 1].y });
            break;
        case 'ArrowLeft':
            snake.push({ x: snake[snake.length - 1].x - 1, y: snake[snake.length - 1].y });
            break;
        case 'ArrowUp':
            snake.push({ x: snake[snake.length - 1].x, y: snake[snake.length - 1].y + 1 });
            break;
        case 'ArrowDown':
            snake.push({ x: snake[snake.length - 1].x, y: snake[snake.length - 1].y - 1 });
            break;
        default:
            break;
    }
}

var moving = setInterval(() => {
    moveSnake(snake);
}, speedGame);

function endGame() {
    clearInterval(moving);
}
