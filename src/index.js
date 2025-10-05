import {
  Characters,
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Zombie,
  Undead,
} from "./characters.js";

const bowman = new Bowman('Robin');
const swordsman = new Swordsman('Arthur');
const magician = new Magician('Merlin');
const daemon = new Daemon('Azazel');
const zombie = new Zombie('Walker');
const undead = new Undead('Lich');

console.log(bowman);
console.log(swordsman);
console.log(magician);
console.log(daemon);
console.log(zombie);
console.log(undead);
