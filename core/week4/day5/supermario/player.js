class Player {

    constructor(w, h, ctx, keys) {
        this.ctx = ctx;
        
        this.canvasW = w;
        this.canvasH = h;
        
        this.keys = keys;
      
        this.x = this.canvasW * 0.08

        // Posición original
        this.y0 = this.canvasH * 0.8;
        
        this.y = this.y0;

        this.img = new Image();
        this.img.src = "img/player.png"
        
        this.img.frames = 3;
        this.img.frameIndex = 0;

        this.w = 50;
        this.h = 75;

        this.vy = 1;
        this.setListeners();        
    }


    setListeners() {
   
        document.onkeydown = function(event) {
            
            if (
                event.keyCode === this.keys.TOP_KEY && 
                this.y === this.y0
                
                ) {
                    this.y -=5
                    this.vy -= 10;
                    console.log("Hola")

                }
        }.bind(this)
    }

    draw(frameCounter) {
        this.ctx.drawImage(
            this.img,
            this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
            0,
            Math.floor(this.img.width / this.img.frames),
            this.img.height,
            this.x,
            this.y,
            this.w,
            this.h
        )

    this.animateImg(frameCounter)


    }

    move() {
       
        let gravity = 0.4;

        if (this.y >= this.y0) {
         this.vy = 1;
         this.y = this.y0;
        } else {
            this.vy += gravity;
            this.y += this.vy;
        }
    }
  
    animateImg(frameCounter) {

        if(frameCounter % 6 === 0) {
            this.img.frameIndex++;
        }

        if(this.img.frameIndex > 2) this.img.frameIndex = 0;
    }

}