import Race from './Race';

class Orc extends Race {
  private static countRaceOrc = 0;
  private _maxLifePoints = 74;
    
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.countRaceOrc += 1;
  }
    
  get maxLifePoints() {
    return this._maxLifePoints;
  }
    
  static createdRacesInstances(): number {
    return Orc.countRaceOrc;
  }
}

export default Orc;