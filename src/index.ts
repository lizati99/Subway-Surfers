import { Player } from "./Player.js";
import { Block } from "./Block.js";
import { Game } from "./Game.js";
import { Display } from "./display.js";

const playerElement = document.querySelector(".player") as HTMLDivElement;
const blockElement = document.querySelector(".block") as HTMLDivElement;
const scoreElement = document.querySelector(".score") as HTMLElement;
const finalScore = document.querySelector(".finalScore") as HTMLElement;
const replay = document.querySelector(".replay") as HTMLElement;
const overlayElement = document.querySelector(".overlay") as HTMLElement;
const effectElement = document.querySelector(".overlay-effect") as HTMLElement;

const display= new Display(overlayElement, effectElement, finalScore);

let player = new Player(playerElement, 20, 50, 10, 10);
let block = new Block(blockElement, 20, -10, 10, 10, 1);
let game = new Game(display, player, block, scoreElement);

replay.addEventListener("click", item=>{
    display.hidePopUp();
    display.finalScore.innerHTML = "0";
    player = new Player(playerElement, 20, 50, 10, 10);
    block = new Block(blockElement, 20, -10, 10, 10, 1);
    game = new Game(display, player, block, scoreElement);
});

