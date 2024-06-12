export class Game {
    constructor(display, player, block, scoreElement) {
        this.player = player;
        this.block = block;
        this.display = display;
        this.score = 0;
        this.scoreElement = scoreElement;
        this.updateScore();
        this.start();
    }
    start() {
        window.addEventListener("keydown", (event) => {
            if (event.key == "ArrowLeft")
                this.player.move("left");
            else if (event.key == "ArrowRight")
                this.player.move("right");
        });
        const intervalId = setInterval(() => {
            this.block.move();
            this.display.finalScore.innerHTML = this.score.toString();
            this.checkCollision();
            if (this.score == 0) {
                this.display.showPopUp();
                clearInterval(intervalId);
            }
            this.updateScore();
        }, 40);
    }
    checkCollision() {
        if (this.player.x == this.block.x && this.player.y <= this.block.y + this.block.height)
            return this.score = 0;
        return this.score++;
    }
    updateScore() {
        this.scoreElement.innerText = this.score.toString();
    }
}
