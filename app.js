const pet = {
  hunger: 100,
  happiness: 100,
  energy: 100,
  sleeping: false,
  emojis: ["🐱", "🐶", "🐰", "🐼", "🐨", "🦊"],
  currentEmoji: 0,
};

function updateStats() {
  document.getElementById("hunger").textContent = pet.hunger;
  document.getElementById("happiness").textContent = pet.happiness;
  document.getElementById("energy").textContent = pet.energy;
}

function showMessage(message) {
  document.getElementById("messages").textContent = message;
}

function nourrir() {
  if (pet.sleeping) {
    showMessage("Chut! Ton animal dort! 😴");
    return;
  }

  document.getElementById("pet").classList.add("jump");
  setTimeout(
    () => document.getElementById("pet").classList.remove("jump"),
    500,
  );

  pet.hunger = Math.min(100, pet.hunger + 30);
  pet.energy = Math.max(0, pet.energy - 10);
  showMessage("Miam miam ! 😋");
  updateStats();
}

function jouer() {
  if (pet.sleeping) {
    showMessage("Ton animal dort profondément ! 💤");
    return;
  }

  if (pet.energy < 20) {
    showMessage("Ton animal est trop fatigué pour jouer ! 😫");
    return;
  }

  document.getElementById("pet").classList.add("shake");
  setTimeout(
    () => document.getElementById("pet").classList.remove("shake"),
    500,
  );

  pet.happiness = Math.min(100, pet.happiness + 30);
  pet.energy = Math.max(0, pet.energy - 20);
  pet.hunger = Math.max(0, pet.hunger - 20);
  showMessage("Youpi ! C'est trop fun ! 🎉");
  updateStats();
}

function dormir() {
  if (pet.sleeping) {
		document.getElementById('buttons.nthChild(3)').disabled = true;
    return;
  }

  pet.sleeping = true;
  document.getElementById("pet").style.transform = "rotate(90deg)";
  pet.energy = Math.min(100, pet.energy + 50);

  // Créer une animation de "Zzz"
  let zCounter = 0;
  const sleepInterval = setInterval(() => {
    if (zCounter < 5) {
      showMessage("💤  ".repeat(zCounter + 1));
      zCounter++;
    }
  }, 1000);

  updateStats();

  setTimeout(() => {
    pet.sleeping = false;
    document.getElementById("pet").style.transform = "rotate(0deg)";
    showMessage("Ton animal se réveille ! 🌞");
    clearInterval(sleepInterval); // Arrêter l'animation des Z
    updateStats();
  }, 5000);
}

function changerAnimal() {
  pet.currentEmoji = (pet.currentEmoji + 1) % pet.emojis.length;
  document.getElementById("pet").textContent = pet.emojis[pet.currentEmoji];
}

setInterval(() => {
  if (!pet.sleeping) {
    pet.hunger = Math.max(0, pet.hunger - 5);
    pet.happiness = Math.max(0, pet.happiness - 5);
    pet.energy = Math.max(0, pet.energy - 5);
    updateStats();

    if (pet.hunger < 20) {
      showMessage("Ton animal a très faim ! 😢");
    } else if (pet.happiness < 20) {
      showMessage("Ton animal s'ennuie ! 😕");
    } else if (pet.energy < 20) {
      showMessage("Ton animal est fatigué ! 😴");
    }
  }
}, 5000);

document.getElementById("pet").onclick = changerAnimal;
