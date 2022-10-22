const Game = {
    canvas: undefined,
    ctx: undefined,
    fps: 60,
    keys: {
        TOP_KEY: 38,
        SPACE: 32
    },

    init: function () {
        console.log("Cargado")
        this.canvas = document.getElementById('canvas')
        this.ctx = canvas.getContext("2d");
        
        // ScoreBoard.init(this.ctx);

        this.start()
    },

    start: function() {
        console.log("Empezando juego")
       

        this.reset();
        
        

        this.interval = setInterval(() => {
            this.frameCounter++;

            this.score += 0.01;

            if(this.frameCounter > 1000) {
                this.frameCounter = 0;
            }

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
        this.background = new Background(this.canvas.width, this.canvas.height, this.ctx)
        this.player = new Player(this.canvas.width, this.canvas.height, this.ctx, this.keys)
        // this.scoreBoard = ScoreBoard
        this.score = 0;
        this.obstacles = []

        this.frameCounter = 0
    },

    moveAll: function() {
      
        this.background.move()
        this.player.move()

        this.obstacles.forEach(obstacle => {
            obstacle.move()
        })
    },

    drawAll: function() {
    
        this.background.draw()
        this.player.draw(this.frameCounter)
        this.obstacles.forEach(obstacle => {
            obstacle.draw()
        })
    },

    stop: function() {
        clearInterval(this.interval)
    },

    generateObstacle: function() {
        this.obstacles.push(
            new Obstacle(this.canvas.width, this.player.y0, this.player.h, this.ctx)
        )
    },

    clearObstacles: function() {
        this.obstacles = this.obstacles.filter((obstacle) => obstacle.x >= 0)
    },

    isCollision: function() {
        console.log("hol<colisi")
        return this.obstacles.some(obstacle => {
            return (this.player.x + this.player.w >= obstacle.x &&
            this.player.x < obstacle.x + obstacle.w &&
            this.player.y + (this.player.h - 20) >= obstacle.y)
        })
    },

    gameOver: function() {
        console.log("game OV")
        this.stop();

        if(confirm("GAME OVER. JUEGAS DE NUEVO?")) {
            this.reset();
            this.start();
        }
    }

}