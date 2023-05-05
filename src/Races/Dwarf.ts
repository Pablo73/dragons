import Race from './Race';

class Dwarf extends Race {
  private static countRaceDwarf = 0;
  private _maxLifePoints = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.countRaceDwarf += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.countRaceDwarf;
  }
}

export default Dwarf;