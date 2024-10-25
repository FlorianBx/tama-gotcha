export default function updateStats() {
  document.getElementById("hunger").textContent = pet.hunger;
  document.getElementById("happiness").textContent = pet.happiness;
  document.getElementById("energy").textContent = pet.energy;
}

