import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static countNecromancer = 0;

  constructor(name: string) {
    super(name);
    Necromancer.countNecromancer += 1;
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Necromancer.countNecromancer;
  }
}

export default Necromancer;