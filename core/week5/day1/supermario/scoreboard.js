const ScoreBoard = {

    ctx: undefined,
    init: function(ctx) {
        ctx.font = "30px sans-serif"
        this.ctx = ctx;
    },

    update: function(score) {
        this.ctx.fillStyle = "green";
        this.ctx.fillText(Math.floor(score), 50 , 50)
    }

}