import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static countWarrior = 0;

  constructor(name: string) {
    super(name);
    Warrior.countWarrior += 1;
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Warrior.countWarrior;
  }
}

export default Warrior;