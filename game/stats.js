export function updateStats(pet) {
  document.getElementById('hunger').textContent = pet.hunger;
  document.getElementById('happiness').textContent = pet.happiness;
  document.getElementById('energy').textContent = pet.energy;
}

export function initStats() {
  document.getElementById('hunger').textContent = 100;
  document.getElementById('happiness').textContent = 100;
  document.getElementById('energy').textContent = 100;
}

export function decreaseStats(pet) {
  if (!pet.sleeping) {
    pet.hunger = Math.max(0, pet.hunger - 5);
    pet.happiness = Math.max(0, pet.happiness - 5);
    pet.energy = Math.max(0, pet.energy - 5);
    updateStats(pet);
  }
}
