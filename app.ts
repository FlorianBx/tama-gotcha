import { pet, changeAnimal } from './game/pet.js'
import { feed, play, sleep } from './game/actions.js'
import { decreaseStats } from './game/stats.js'
import { checkAndShowWarnings } from './ui/display.js'

function initGame() {
  window.feedTheAnimal = feed
  window.playWithTheAnimal = play
  window.makeTheAnimalSleep = sleep

  document.getElementById('pet').onclick = () => {
    const newAnimal = changeAnimal()
    document.getElementById('pet').textContent = newAnimal
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
