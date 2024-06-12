import { Player } from "./Player.js";
import { Block } from "./Block.js";
import { Game } from "./Game.js";
import { Display } from "./display.js";
const playerElement = document.querySelector(".player");
const blockElement = document.querySelector(".block");
const scoreElement = document.querySelector(".score");
const finalScore = document.querySelector(".finalScore");
const replay = document.querySelector(".replay");
const overlayElement = document.querySelector(".overlay");
const effectElement = document.querySelector(".overlay-effect");
const gameAudio = document.querySelector("#myAudio");
const display = new Display(overlayElement, effectElement, finalScore);
let player = new Player(playerElement, 20, 50, 10, 10);
let block = new Block(blockElement, 20, -10, 10, 10, 1);
let game = new Game(display, player, block, scoreElement);
replay.addEventListener("click", item => {
    display.hidePopUp();
    display.finalScore.innerHTML = "0";
    player = new Player(playerElement, 20, 50, 10, 10);
    block = new Block(blockElement, 20, -10, 10, 10, 1);
    game = new Game(display, player, block, scoreElement);
});
const audio = new Audio('../song.mp3');
const audioControls = document.querySelectorAll(".control-btn");
const volumeControl = document.querySelector('.volumeControl');
audioControls.forEach(control => {
    control.addEventListener("click", event => {
        console.log("helo");
        const target = event.target;
        switch (target.innerHTML) {
            case "Play":
                audio.play();
                break;
            case "Pause":
                audio.pause();
                break;
            case "Stop":
                audio.pause();
                audio.currentTime = 0;
            default:
                break;
        }
    });
});
volumeControl.addEventListener('input', event => {
    const target = event.target;
    audio.volume = parseFloat(target.value);
});
