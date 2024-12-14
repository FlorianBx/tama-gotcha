import { pet, changeAnimal } from './game/pet'
import { feed, play, sleep } from './game/actions'
import { decreaseStats } from './game/stats'
import { checkAndShowWarnings } from './ui/display'

declare global {
  interface Window {
    feedTheAnimal: () => void
    playWithTheAnimal: () => void
    makeTheAnimalSleep: () => void
  }
}

function initGame() {
  window.feedTheAnimal = feed
  window.playWithTheAnimal = play
  window.makeTheAnimalSleep = sleep

  /** Ajout d'une condition pour ne pas faire de changement d'animal si le pet n'est pas encore créé */
  const pet = document.getElementById('pet')

  if (!pet) return

  pet.onclick = () => {
    const newAnimal = changeAnimal()
    pet.textContent = newAnimal
  }
  startLifeCycle()
}

function startLifeCycle() {
  setInterval(() => {
    if (pet.sleeping) {
      return
    }

    decreaseStats(pet)

    checkAndShowWarnings(pet)
  }, 5000)
}

// Démarrer le jeu quand la page est chargée
document.addEventListener('DOMContentLoaded', initGame)

export { initGame, startLifeCycle }
