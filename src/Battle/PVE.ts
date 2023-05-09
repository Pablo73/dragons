import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private _character: Fighter,
    private _characterFigther: Fighter[] | SimpleFighter[],
  ) {
    super(_character);
    super.fight();
  }

  fight(): number {
    this._characterFigther.forEach((ele) => {
      this._character.attack(ele);
      ele.attack(this._character);
    });
    return this._character.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;