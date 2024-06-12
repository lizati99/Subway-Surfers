import { GameElement } from "./GameElement.js";

export class Block extends GameElement {
    speed: number;

    constructor(element: HTMLDivElement, x: number, y: number, width: number, height: number, speed: number) {
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