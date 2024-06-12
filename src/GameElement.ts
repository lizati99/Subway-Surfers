import { IGameElement } from "./IGameElement.js";

export class GameElement implements IGameElement{
    
    constructor(public element: HTMLElement,
        public x: number,
        public y: number,
        public width: number,
        public height: number){
            this.updatePosition();
        }
    
    updatePosition() {
        this.element.style.left = this.x + 'vmin';
        this.element.style.top = this.y + 'vmin';
    }
    
}