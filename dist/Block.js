import { GameElement } from "./GameElement.js";
export class Block extends GameElement {
    constructor(element, x, y, width, height, speed) {
        super(element, x, y, width, height);
        this.speed = speed;
    }
    move() {
        this.y += this.speed;
        if (this.y > 60) {
            this.y = -10; // Reset block to top
            this.x = [10, 20, 30][Math.floor(Math.random() * 3)]; // Random lane
        }
        this.updatePosition();
    }
}
