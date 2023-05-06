import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static countRager = 0;

  constructor(name: string) {
    super(name);
    Ranger.countRager += 1;
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Ranger.countRager;
  }
}

export default Ranger;