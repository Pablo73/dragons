import Race from './Race';

class Halfling extends Race {
  private static countRaceHalfling = 0;
  private _maxLifePoints = 60;
      
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.countRaceHalfling += 1;
  }
      
  get maxLifePoints() {
    return this._maxLifePoints;
  }
      
  static createdRacesInstances(): number {
    return Halfling.countRaceHalfling;
  }
}

export default Halfling;