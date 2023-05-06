import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static countMarge = 0;

  constructor(name: string) {
    super(name);
    Mage.countMarge += 1;
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Mage.countMarge;
  }
}

export default Mage;