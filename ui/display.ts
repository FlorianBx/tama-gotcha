import { Pet } from '../types/Pet'

export function showMessage(message: string) {
  const messagesElement = document.getElementById('messages')
  if (messagesElement === null) return
  messagesElement.textContent = message
}

export function checkAndShowWarnings(pet: Pet) {
  if (pet.hunger < 20) {
    showMessage('Ton animal a très faim ! 😢')
  } else if (pet.happiness < 20) {
    showMessage("Ton animal s'ennuie ! 😕")
  } else if (pet.energy < 20) {
    showMessage('Ton animal est fatigué ! 😴')
  }
}
