/**
 * @module games/actions
 * 
 * Ce module contient les actions du jeu
 * feed: fait manger l'animal
 * play: jouer avec l'animal
 * sleep: fait dormir l'animal
 */

import { pet } from './pet.js';
import { showMessage } from '../ui/display.js';
import { updateStats } from './stats.js';


export function feed() {
  if (pet.sleeping) {
    showMessage('Chut! Ton animal dort! 😴');
    return;
  }

  const petElement = document.getElementById('pet');
  petElement.classList.add('jump');
  setTimeout(() => petElement.classList.remove('jump'), 500);

  pet.hunger = Math.min(100, pet.hunger + 30);
  pet.energy = Math.max(0, pet.energy - 10);
  
  showMessage('Miam miam ! 😋');
  updateStats(pet);
}

export function play() {
  if (pet.sleeping) {
    showMessage('Ton animal dort profondément ! 💤');
    return;
  }

  if (pet.energy < 20) {
    showMessage('Ton animal est trop fatigué pour jouer ! 😫');
    return;
  }

  const petElement = document.getElementById('pet');
  petElement.classList.add('shake');
  setTimeout(() => petElement.classList.remove('shake'), 500);

  pet.happiness = Math.min(100, pet.happiness + 30);
  pet.energy = Math.max(0, pet.energy - 20);
  pet.hunger = Math.max(0, pet.hunger - 20);

  showMessage("Youpi ! C'est trop fun ! 🎉");
  updateStats(pet);
}


export function sleep() {
  const petElement = document.getElementById('pet');
  const sleepButton = document.getElementById('sleep-button');

  sleepButton.disabled = true;
  
  pet.sleeping = true;
  petElement.style.transform = 'rotate(90deg)';
  
  pet.energy = Math.min(100, pet.energy + 50);
  
  let zCounter = 0;
  showMessage('💤  ');
  const sleepInterval = setInterval(() => {
    if (zCounter < 4) {
      showMessage('💤  '.repeat(zCounter + 1));
      zCounter++;
    }
  }, 1000);

  updateStats(pet);

	
  setTimeout(() => {
    sleepButton.disabled = false;
    pet.sleeping = false;
    petElement.style.transform = 'rotate(0deg)';
    showMessage('Ton animal se réveille ! 🌞');
    clearInterval(sleepInterval);
    updateStats(pet);
  }, 5000);
}
