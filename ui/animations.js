export function jumpAnimation() {
    const petElement = document.getElementById('pet');
    petElement.classList.add('jump');
    setTimeout(() => petElement.classList.remove('jump'), 500);
}

export function shakeAnimation() {
    const petElement = document.getElementById('pet');
    petElement.classList.add('shake');
    setTimeout(() => petElement.classList.remove('shake'), 500);
}

export function sleepAnimation(isStarting) {
    const petElement = document.getElementById('pet');
    petElement.style.transform = isStarting ? 'rotate(90deg)' : 'rotate(0deg)';
}

export function sleepingZAnimation() {
    let zCounter = 0;
    const sleepText = '💤  ';

    const interval = setInterval(() => {
        if (zCounter < 4) {
            document.getElementById('messages').textContent = sleepText.repeat(zCounter + 1);
            zCounter++;
        }
    }, 1000);

    // Retourner l'interval pour pouvoir l'arrêter plus tard
    return interval;
}

export function stopAnimation(intervalId) {
    clearInterval(intervalId);
}
