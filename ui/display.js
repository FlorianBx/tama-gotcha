export function showMessage(message) {
  document.getElementById('messages').textContent = message;
}

export function checkAndShowWarnings(pet) {
  if (pet.hunger < 20) {
    showMessage('Ton animal a très faim ! 😢');
  } else if (pet.happiness < 20) {
    showMessage("Ton animal s'ennuie ! 😕");
  } else if (pet.energy < 20) {
    showMessage('Ton animal est fatigué ! 😴');
  }
}
