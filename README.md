# 🐱 Tama Gotcha

## Description
Tama Gotcha est un exercice de programmation JavaScript inspiré du célèbre Tamagotchi. Le but est de créer un animal virtuel interactif que vous devez maintenir en vie en gérant sa faim, son bonheur et son énergie.

## 🎯 Objectifs Pédagogiques
- Manipuler le DOM avec JavaScript
- Gérer les événements utilisateur
- Utiliser les fonctions et les objets
- Manipuler les intervalles et les timeouts
- Créer des animations CSS simples

## 🎮 Fonctionnalités Requises

### Interface
- Créer une carte contenant :
  - Un emoji représentant l'animal (🐱, 🐶, 🐰, 🐼, 🐨 ou 🦊)
  - Trois barres de statistiques : Faim, Bonheur et Énergie (0-100%)
  - Trois boutons d'action : Nourrir, Jouer, Dormir
  - Une zone de messages

### Animal
- L'animal doit avoir les caractéristiques suivantes :
  - Faim (diminue au fil du temps)
  - Bonheur (diminue au fil du temps)
  - Énergie (diminue au fil du temps)
  - État de sommeil

### Actions
1. **Nourrir** (bouton 🍕)
   - Augmente la faim de 30%
   - Diminue l'énergie de 10%
   - Animation de saut
   - Impossible si l'animal dort

2. **Jouer** (bouton 🎾)
   - Augmente le bonheur de 30%
   - Diminue l'énergie de 20%
   - Diminue la faim de 20%
   - Animation de secousse
   - Impossible si l'animal dort ou est trop fatigué

3. **Dormir** (bouton 😴)
   - L'animal dort pendant 5 secondes
   - Augmente l'énergie de 50%
   - Rotation de l'animal
   - Animation "Z Z Z" pendant le sommeil

### Système de Vie
- Toutes les 5 secondes (si l'animal ne dort pas) :
  - La faim diminue de 5%
  - Le bonheur diminue de 5%
  - L'énergie diminue de 5%
  - Affichage de messages d'alerte si une statistique est trop basse

## 💡 Bonus
1. **Système de Modules**
   - Organiser le code en utilisant les modules JavaScript (import/export)
   - Séparer la logique métier des utilitaires

2. **Personnalisation de l'Animal**
   - Permettre de changer l'animal en cliquant dessus
   - Faire une rotation entre les différents emojis disponibles

## 🎨 Style
- Utiliser une interface ludique et colorée
- Implémenter des animations pour les actions :
  - Animation de saut pour l'alimentation
  - Animation de secousse pour le jeu
  - Rotation pour le sommeil
- Utiliser des émojis pour une meilleure expérience utilisateur

## 📝 Conseils
- Commencez par créer la structure HTML de base
- Implémentez ensuite les fonctionnalités une par une
- Testez régulièrement vos fonctionnalités
- Ajoutez le style progressivement
- Les modules JavaScript peuvent être implémentés en dernier

## 🏆 Critères de Réussite
- L'interface est fonctionnelle et répond aux interactions
- Les animations sont présentes et fluides
- Le système de vie fonctionne correctement
- Les statistiques sont mises à jour en temps réel
- Les messages sont affichés de manière appropriée
- Le code est propre et bien organisé
