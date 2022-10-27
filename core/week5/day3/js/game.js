const Game = {
    canvas: undefined,
    ctx: undefined,
    scoreBoard: undefined,
    fps: 60,
    keys: {
        ARROW_RIGHT: 39,
        ARROW_LEFT: 37,
        ARROW_TOP: 38,
        ARROW_BOTTOM: 40
    },
    randomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) - min)
    },

    init: function () {
        this.canvas = document.getElementById('canvas')
        this.ctx = canvas.getContext("2d");
        
       
       
        
        this.start()
    },

    start: function() {       
        this.reset();
        
        this.interval = setInterval(() => {

            this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)

            this.frameCounter++;

            if(this.frameCounter > 1000) {
                this.frameCounter = 0;
            }

            // Cada 50 frame genera un obtaculo
            if(this.frameCounter % 50 === 0) {
                this.generateObstacle()
            }

            this.moveAll();
            this.drawAll();

            this.clearObstacles()

            if(this.isCollision()) {
                this.gameOver();
            }

        }, 1000 / this.fps)

    },

    reset: function() {
        this.player = new Player(this.canvas.width, this.canvas.height, this.ctx, this.keys)
        this.obstacles = []

        this.frameCounter = 0


        
    },

    moveAll: function() {
        this.player.move()
        this.obstacles.forEach(obstacle => {
            obstacle.move()
        })
    },

    drawAll: function() {
        this.player.draw()
        this.obstacles.forEach(obstacle => {
            obstacle.draw()
        })
    },

    stop: function() {
        clearInterval(this.interval)
    },

    generateObstacle: function() {
        const sense = (this.randomInt(0, 1) > 0) ? -1 : 1;

        this.obstacles.push(
            new Obstacle(this.canvas.width, this.canvas.height, sense, this.randomInt(0, this.canvas.height),  this.ctx)
        )
    },

    clearObstacles: function() {
        this.obstacles = this.obstacles.filter((obstacle) => 
        (obstacle.x >= 0 && obstacle.sense < 0) || 
        (obstacle.x <= this.canvas.width && obstacle.sense > 0))
    },

    isCollision: function() {
        return this.obstacles.some(obstacle => {
            return (
                this.player.x + this.player.w >= obstacle.x - obstacle.r &&
                this.player.x <= obstacle.x + obstacle.r &&
                this.player.y + this.player.h >= obstacle.y - obstacle.r &&
                this.player.y <= obstacle.y + obstacle.r)
        })
    },

    gameOver: function() {
        this.stop();

        if(confirm("GAME OVER. JUEGAS DE NUEVO?")) {
            this.reset();
            this.start();
        }
    }
}


