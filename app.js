import { lifeGestion } from "./modules/utils.js";
import { pet, feedTheAnimal, playWithTheAnimal, makeTheAnimalSleep } from "./modules/main.js";


document.addEventListener('DOMContentLoaded', () => {
lifeGestion(pet);


Object.assign(window, {
    feedTheAnimal,
    playWithTheAnimal,
    makeTheAnimalSleep
});
});
