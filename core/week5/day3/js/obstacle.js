class Obstacle {
    constructor(w, h, sense, y, ctx) {
        this.ctx = ctx;
        
        this.dx = 5;
        this.r = 10;

        this.sense = sense;

        console.log(this.sense)

        if (this.sense > 0) {
            this.x = 0 - this.r;
        } else {
            this.x = w + this.r;
        }
    
        this.y = y;



    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "black";
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.closePath();
    }

    move() {

      this.x += this.dx * this.sense;
      
    }
}