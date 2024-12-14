"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initGame = initGame;
exports.startLifeCycle = startLifeCycle;
const pet_js_1 = require("./game/pet.js");
const actions_js_1 = require("./game/actions.js");
const stats_js_1 = require("./game/stats.js");
const display_js_1 = require("./ui/display.js");
function initGame() {
    window.feedTheAnimal = actions_js_1.feed;
    window.playWithTheAnimal = actions_js_1.play;
    window.makeTheAnimalSleep = actions_js_1.sleep;
    document.getElementById('pet').onclick = () => {
        const newAnimal = (0, pet_js_1.changeAnimal)();
        document.getElementById('pet').textContent = newAnimal;
    };
    startLifeCycle();
}
function startLifeCycle() {
    setInterval(() => {
        if (pet_js_1.pet.sleeping) {
            return;
        }
        (0, stats_js_1.decreaseStats)(pet_js_1.pet);
        (0, display_js_1.checkAndShowWarnings)(pet_js_1.pet);
    }, 5000);
}
// Démarrer le jeu quand la page est chargée
document.addEventListener('DOMContentLoaded', initGame);
