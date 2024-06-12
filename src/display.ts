
export class Display{
    constructor(public boxGameOver: HTMLElement, public boxEffect: HTMLElement, public finalScore : HTMLElement){}

    showPopUp(){
        setTimeout(()=>{
            this.boxGameOver.classList.add("active");
            }, 800)
        this.boxEffect.classList.add("active");
        this.boxEffect.style.animation="openOverlayAnimee 1s linear 1";
    }
    hidePopUp(){
        this.boxEffect.classList.remove("active");
        this.boxEffect.style.animation="closeOverlayAnimee 1s linear 1";
        this.boxGameOver.classList.remove("active");
    }
}