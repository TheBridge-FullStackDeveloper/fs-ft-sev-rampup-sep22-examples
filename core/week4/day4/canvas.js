
let w, h, w2, h2;

w = window.innerWidth
h = window.innerHeight
w2 = w / 2
h2 = h / 2



const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const buttonToggleDOMEl = document.querySelector('#toggle')






const canvasDOMEl = document.querySelector('#canvas')
const ctx = canvasDOMEl.getContext('2d');


canvasDOMEl.setAttribute('width', w)
canvasDOMEl.setAttribute('height', h)



const printLines = () => {
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 500);
    ctx.lineTo(100, 50);
    ctx.stroke();
    ctx.closePath();
}

// printLines()

const printBall = () => {
    ctx.beginPath();
    ctx.fillStyle = `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, .5)`;
    ctx.arc(randomInt(0, w), randomInt(0, h), randomInt(10, 60), 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath();
}



const printSeveralBalls = () =>  {
    for (let i = 0; i < 100000; i++) {
        printBall()
    }
}

// printSeveralBalls()


const printFixedBall = () => {

    for (let posX = 0; posX < w; posX++) {
    
        ctx.beginPath();
        ctx.fillStyle = `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, .2)`;
        ctx.arc(posX, h2 + 200 * Math.tan((posX * Math.PI)/180), randomInt(0, 100), 0, 2 * Math.PI)
        ctx.fill()
        ctx.closePath(); 
    }
}
printFixedBall()

let currentInterval;
let posX = 0;
const printFixedBallAsync = () => {

     const myInterval = setInterval(() => {
                ctx.clearRect(0, 0, w, h)
                ctx.beginPath();
                ctx.fillStyle = `rgba(0, 250, 250, .5)`;
                ctx.arc(posX++, h2 + 100 * Math.cos((posX * Math.PI)/180), 50, 0, 2 * Math.PI)
                ctx.fill()
                ctx.closePath();     
            }, 10)
        
    return myInterval;  
}

currentInterval = printFixedBallAsync()

buttonToggleDOMEl.onclick = () => {
    if(currentInterval) {
        clearInterval(currentInterval)
        currentInterval = null;
    } else {
        currentInterval = printFixedBallAsync()
    }
}











