class Player {

    constructor(w, h, ctx, keys) {
        this.ctx = ctx;
        this.canvasW = w;
        this.canvasH = h;
        this.keys = keys;

        this.w = 1404 * 0.08;
        this.h = 1631 * 0.08;
      
        this.x = (this.canvasW / 2) - (this.w / 2)
        this.y = this.canvasH - this.h;

        this.img = new Image();
        this.img.src = "styles/images/dog-up.png"

        this.setListeners();        

        this.state = "parado"

        this.dx = 0;
        this.dy = 0;
    }


    setListeners() {
        
        // Vincular las teclas de los controladores de teclado
        document.onkeydown = function(event) {
            if (event.keyCode === this.keys.ARROW_TOP) {
                this.img.src = "styles/images/dog-up.png"
                this.dy = -10
            }  
            if (event.keyCode === this.keys.ARROW_BOTTOM) {
                this.img.src = "styles/images/dog-down.png"
                this.dy = 10
            }  
            if (event.keyCode === this.keys.ARROW_RIGHT) {
                this.img.src = "styles/images/dog-right.png"
                this.dx = 10
            }  
            if (event.keyCode === this.keys.ARROW_LEFT) {
                this.img.src = "styles/images/dog-left.png"
                this.dx = -10
            }  
        }.bind(this)

        document.onkeyup = function(event) {
            if (event.keyCode === this.keys.ARROW_TOP || 
                event.keyCode === this.keys.ARROW_BOTTOM || 
                event.keyCode === this.keys.ARROW_RIGHT || 
                event.keyCode === this.keys.ARROW_LEFT
                ) {
                this.dy = 0
                this.dx = 0
            }  
           
        }.bind(this)
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h
        )
    }

    move() {
        console.log(this.x)

        if(
            (this.x + this.w <= this.canvasW && this.x >= 0) ||
            (this.x + this.w >= this.canvasW && this.dx < 0) ||
            (this.x <= 0 && this.dx > 0)
        ) {
            this.x += this.dx
        }

        if(
            (this.y + this.h <= this.canvasH && this.y >= 0) ||
            (this.y + this.h >= this.canvasH && this.dy < 0) ||
            (this.y <= 0 && this.dy > 0)
        ) {
            this.y += this.dy
        }

        
    }

}