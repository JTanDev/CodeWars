// Create a function that returns the name of the winner in a fight between two fighters.
// Each fighter takes turns attacking the other and whoever kills the other first is victorious.
//Death is defined as having health <= 0.
// Each fighter will be a Fighter object/instance.
//See the Fighter class below in your chosen language.
// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0.
//You can mutate the Fighter objects.

// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }

function declareWinner(fighter1, fighter2, firstAttacker) {
  let fight1HP = fighter1.health - fighter2.damagePerAttack;
  let fight2HP = fighter2.health - fighter1.damagePerAttack;
  if (firstAttacker == fighter1.name) {
    do {
      fight1HP -= fighter2.damagePerAttack;
      fight2HP -= fighter1.damagePerAttack;
    } while (fight1HP > 0 && fight2HP > 0);
    return fight2HP < 1 ? fighter1.name : fighter2.name;
  } else {
    do {
      fight1HP -= fighter2.damagePerAttack;
      fight2HP -= fighter1.damagePerAttack;
    } while (fight1HP > 0 && fight2HP > 0);
    return fight1HP < 1 ? fighter2.name : fighter1.name;
  }
}

//hmm

function declareWinner2(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  var fac2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  if (fac1 < fac2) {
    return fighter2.name;
  } else if (fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}
