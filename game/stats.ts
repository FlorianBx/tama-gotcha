import { Pet } from '../types/Pet';

const hungerElement = document.getElementById('hunger');
const happinessElement = document.getElementById('happiness');
const energyElement = document.getElementById('energy');


export function updateStats(pet: Pet) {
	if (hungerElement === null || happinessElement === null || energyElement === null) return;
  hungerElement.textContent = pet.hunger.toString();
	happinessElement.textContent = pet.happiness.toString();
	energyElement.textContent = pet.energy.toString();
}

export function initStats() {
	if (hungerElement === null || happinessElement === null || energyElement === null) return;
  hungerElement.textContent = String(100);
	happinessElement.textContent = String(100);
	energyElement.textContent = String(100);
}

export function decreaseStats(pet: Pet) {
  if (!pet.sleeping) {
    pet.hunger = Math.max(0, pet.hunger - 5);
    pet.happiness = Math.max(0, pet.happiness - 5);
    pet.energy = Math.max(0, pet.energy - 5);
    updateStats(pet);
  }
}
