import Race from './Race';

class Elf extends Race {
  private static countRaceElf = 0;
  private _maxLifePoints = 99;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.countRaceElf += 1;
  }
  
  get maxLifePoints() {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return Elf.countRaceElf;
  }
}

export default Elf;