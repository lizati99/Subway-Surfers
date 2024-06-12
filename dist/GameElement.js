export class GameElement {
    constructor(element, x, y, width, height) {
        this.element = element;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.updatePosition();
    }
    updatePosition() {
        this.element.style.left = this.x + 'vmin';
        this.element.style.top = this.y + 'vmin';
    }
}
