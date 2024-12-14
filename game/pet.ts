import { animals } from '../datas/animals';
import { Pet } from '../types/Pet';

export const pet: Pet = {
  hunger: 100,
  happiness: 100,
  energy: 100,
  sleeping: false,
  currentAnimal: 0
};

export function changeAnimal(): string {
  pet.currentAnimal = (pet.currentAnimal + 1) % animals.length;
  return animals[pet.currentAnimal];
}
