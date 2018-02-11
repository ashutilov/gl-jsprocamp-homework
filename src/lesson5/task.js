/* helpers. May be useful when need to select random monster, if you need it */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

function getRandomElement(arr) {
  return arr[getRandomInt(0, arr.length - 1)];
}
/* ! helpers */

function Game() {
  this.status = 'Idle';
  this.hero = undefined;
  this.monsters = [];
}

Game.STATUSES = {
  idle: 'Idle',
  progress: 'In progress',
  finished: 'Finished',
};

Game.MAX_MONSTERS = 2;

Game.prototype.beginJourney = function beginJourney() {
  if (this.hero !== undefined && this.monsters.length === Game.MAX_MONSTERS) {
    this.status = Game.STATUSES.progress;
    return 'Your journey has started, fight monsters';
  }
  throw new Error('Cannot start journey, populate the world with hero and monsters first');
};

Game.prototype.finishJourney = function finishJourney() {
  if (this.monsters[0].life === 0 && this.monsters[1].life === 0) {
    this.status = Game.STATUSES.finished;
    return 'The Game is finished. Monsters are dead. Congratulations';
  } else if (this.hero.life === 0) {
    this.status = Game.STATUSES.finished;
    return 'The Game is finished. Hero is dead :(';
  }
  return 'Don`t stop. Some monsters are still alive. Kill`em all';
};

Game.prototype.addHero = function addHero(hero) {
  if (!(hero instanceof Hero)) {
    throw new Error('Only hero instance can be hero');
  }

  if (this.hero !== undefined) {
    throw new Error('Only one hero can exist');
  }

  this.hero = hero;
  return `Hero created, welcome ${hero.getName()}`;

};

Game.prototype.addMonster = function addMonster(monster) {
  if (monster instanceof Monster) {
    if (this.monsters.length === Game.MAX_MONSTERS) {
      throw new Error('Only 2 monsters can exist');
    }
    this.monsters.push(monster);
    return `Monster Created, ${monster.getName()} appeared in the world`;
  }
  throw new Error('Only monster Instances can become monsters');
};

Game.prototype.fight = function fight() {
  if (this.status !== Game.STATUSES.progress) {
    throw new Error('Begin your journey to start fighting monsters');
  }

  const [monster1, monster2] = this.monsters;
  let monster = monster1;

  if (monster1.life === 0) {
    monster = monster2;
  }

  while (monster.life !== 0 || this.hero.life !== 0) {

    if (this.hero.life !== 0) {
      this.hero.attack(monster);
    } else {
      return 'Monster win';
    }

    if (monster.life !== 0) {
      monster.attack(this.hero);
    } else {
      return 'Hero win';
    }

  }

};

function Character(charClass, life, damage) {
  this.charClass = charClass;
  this.life = life;
  this.damage = damage;
}

Character.prototype.getName = function getName() {
  return this.name ? this.name : `I am ${this.charClass} I don\`t have name`;
};

Character.prototype.getCharClass = function getCharClass() {
  return this.charClass;
};

Character.prototype.attack = function attack(target) {
  let [attacker, attacked] = [];

  if (target instanceof Monster) {
    [attacker, attacked] = ['Hero', 'Hero'];
  } else {
    [attacker, attacked] = ['Monster', 'monsters'];
  }

  if (this.constructor.name === target.constructor.name) {
    return `I will attack only ${attacked}`;
  }

  if (target.life <= this.damage) {
    target.life = 0;
    return `${attacker} attacked, ${target.charClass} killed`;
  }
  target.life = target.life - this.damage;
  return `${attacker} attacked, done ${this.damage} damage to ${target.charClass}`;

};

function Hero(name, charClass) {
  const heroClasses = Hero.CLASSES;
  const heroClass = heroClasses[charClass];

  if (heroClass) {
    Character.call(this, heroClass.charClass, heroClass.life, heroClass.damage);
    this.name = name;
  } else {
    throw new Error('Incorrect character class provided');
  }
}

Hero.prototype = Object.create(Character.prototype);
Hero.prototype.constructor = Hero;

Hero.CLASSES = {
  warrior: {
    charClass: 'Warrior',
    life: 30,
    damage: 4,
  },
  rogue: {
    charClass: 'Rogue',
    life: 25,
    damage: 3,
  },
  sorcerer: {
    charClass: 'Sorcerer',
    life: 20,
    damage: 5,
  },
};

function Monster(charClass) {
  const monsterClasses = Monster.CLASSES;
  const monsterClass = monsterClasses[charClass];

  if (monsterClass) {
    Character.call(this, monsterClass.charClass, monsterClass.life, monsterClass.damage);
  } else {
    throw new Error('Incorrect character class provided');
  }
}

Monster.prototype = Object.create(Character.prototype);
Monster.prototype.constructor = Monster;

Monster.CLASSES = {
  zombie: {
    charClass: 'Zombie',
    life: 8,
    damage: 4,
  },
  skeleton: {
    charClass: 'Skeleton',
    life: 10,
    damage: 6,
  },
  holem: {
    charClass: 'Holem',
    life: 15,
    damage: 6,
  },
};

/* Game Population mechanism should go below */
function createHero() {
  const heroes = [
    'Batman',
    'Spider-Man',
    'Iron Man',
    'Boogerman',
    'Captain America',
    'Deadpool',
    'Captain Marvel',
    'Hulk',
    'Thor',
    'Wolverine',
  ];

  const heroName = getRandomElement(heroes);
  const heroClass = getRandomElement(Object.keys(Hero.CLASSES));
  return new Hero(heroName, heroClass);

}

function createMonster() {
  const monsterClass = getRandomElement(Object.keys(Monster.CLASSES));
  return new Monster(monsterClass);

}

function execFight(game) {
  let result;
  if (game.hero.life === 0 || (game.monsters[0].life === 0 && game.monsters[1].life === 0)) {
    result = game.finishJourney();
  } else {
    result = game.fight();
  }
  return result;
}

// execute commands mentioned below one by one
const game = new Game();
game.addHero(createHero());
game.addMonster(createMonster());
game.addMonster(createMonster());
game.beginJourney();
execFight(game);
execFight(game);
execFight(game);

/* End of your solution for Game Population mechanism */

export default {
  Game,
  Hero,
  Monster,
};
