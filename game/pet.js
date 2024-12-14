import { animals } from '../datas/animals.js';

export const pet = {
  hunger: 100,
  happiness: 100,
  energy: 100,
  sleeping: false,
  currentAnimal: 0
};

export function changeAnimal() {
  pet.currentAnimal = (pet.currentAnimal + 1) % animals.length;
  return animals[pet.currentAnimal];
}
