function Fighter(props) {
  let _name = props.name;
  let _damage = props.damage;
  let _hp = props.hp;
  let _strength = props.strength;
  let _agility = props.agility;
  let _wins = 0;
  let _losses = 0;

  return {
    getName() {
      return _name;
    },
    getDamage() {
      return _damage;
    },
    getStrength() {
      return _strength;
    },
    getAgility() {
      return _agility;
    },
    getHealth() {
      return _hp;
    },
    logCombatHistory() {
      console.log(`Name: ${_name}, Wins: ${_wins}, Losses: ${_losses}`);
    },
    addWin() {
      _wins++;
    },
    addLoss() {
      _losses++;
    },
    heal(healHP) {
      const NEW_HP = _hp + healHP;
      _hp = NEW_HP > props.hp ? props.hp : NEW_HP;
    },
    dealDamage(dealHP) {
      const NEW_HP = _hp - dealHP;
      _hp = NEW_HP < 0 ? 0 : NEW_HP;
    },
    attack(opponent) {
      const MAX_NUM = 100;
      const RANDOM_NUMBER = Math.floor(Math.random() * MAX_NUM) + 1;
      const PROBABILITY = opponent.getStrength() + opponent.getAgility();
      if (PROBABILITY < RANDOM_NUMBER) {
        opponent.dealDamage(_damage);
        console.log(`${_name} makes ${_damage} damage to ${opponent.getName()}`);
      } else {
        console.log(`${_name} attack missed`);
      }
    }
  }
}

function battle(fighter1, fighter2) {
  if (!fighter1.getHealth()) {
    console.log(`${fighter1.getName()} is dead and can't fight.`);
    return;
  } else if (!fighter2.getHealth()) {
    console.log(`${fighter2.getName()} is dead and can't fight.`);
    return;
  }
  fighter1.attack(fighter2);
  if (!fighter2.getHealth()) {
    fighter1.addWin();
    fighter2.addLoss();
    console.log(`${fighter1.getName()} has won!`);
    return;
  } else {
    battle(fighter2, fighter1);
  }
}
