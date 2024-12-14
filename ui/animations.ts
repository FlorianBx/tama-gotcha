const petElement = document.getElementById('pet')

export function jumpAnimation() {
  if (petElement === null) return
  petElement.classList.add('jump')
  setTimeout(() => petElement.classList.remove('jump'), 500)
}

export function shakeAnimation() {
  if (petElement === null) return
  petElement.classList.add('shake')
  setTimeout(() => petElement.classList.remove('shake'), 500)
}

export function sleepAnimation(isStarting: boolean) {
  if (petElement === null) return
  petElement.style.transform = isStarting ? 'rotate(90deg)' : 'rotate(0deg)'
}

export function sleepingZAnimation() {
  let zCounter = 0
  const sleepText = '💤  '
  const messagesElement = document.getElementById('messages')

  const interval = setInterval(() => {
    if (zCounter < 4) {
      if (messagesElement === null) return
      messagesElement.textContent = sleepText.repeat(zCounter + 1)
      zCounter++
    }
  }, 1000)

  // Retourner l'interval pour pouvoir l'arrêter plus tard
  return interval
}

export function stopAnimation(intervalId: number) {
  clearInterval(intervalId)
}
