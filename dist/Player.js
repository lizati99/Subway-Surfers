import { GameElement } from "./GameElement.js";
export class Player extends GameElement {
    constructor(element, x, y, width, height) {
        super(element, x, y, width, height);
        this.currentLane = 1; // Start in the middle lane
    }
    move(direction) {
        const lanes = [10, 20, 30]; // Lanes positions in vmin
        if (direction === "left" && this.currentLane > 0) {
            this.currentLane--;
        }
        else if (direction === "right" && this.currentLane < lanes.length - 1) {
            this.currentLane++;
        }
        this.x = lanes[this.currentLane];
        this.updatePosition();
    }
}
