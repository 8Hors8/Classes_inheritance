

const validTypes = [
  "Bowman",
  "Swordsman",
  "Magician",
  "Daemon",
  "Undead",
  "Zombie",
];

/**
 * Класс Characters представляет игрового персонажа с базовыми характеристиками.
 *
 * @class
 */
class Characters {
  /**
   * Создаёт экземпляр персонажа.
   * @param {string} name - Имя персонажа, от 2 до 10 символов.
   * @param {string} type - Тип персонажа. Один из: "Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie".
   * @param {number} attack - Сила атаки персонажа.
   * @param {number} defence - Уровень защиты персонажа.
   * @throws {Error} Если имя или тип не соответствуют ограничениям.
   */
  constructor(name, type, attack, defence) {
    if (typeof name !== "string" || name.length < 2 || name.length > 10) {
      throw new Error("Имя должно быть строкой длиной от 2 до 10 символов");
    }
    const normalizedType =
      type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();

    if (!validTypes.includes(normalizedType)) {
      throw new Error("Неверный тип персонажа");
    }

    this.name = name;
    this.type = normalizedType;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
}

/**
 * Класс Bowman представляет тип персонажа Лучник.
 * @extends Characters
 */
class Bowman extends Characters {
  /**
   * Создаёт экземпляр лучника.
   * @param {string} name - Имя персонажа.
   */
  constructor(name) {
    super(name, "Bowman", 25, 25);
  }
}

/**
 * Класс Swordsman представляет тип персонажа Мечник.
 * @extends Characters
 */
class Swordsman extends Characters {
  /**
   * Создаёт экземпляр мечника.
   * @param {string} name - Имя персонажа.
   */
  constructor(name) {
    super(name, "Swordsman", 40, 10);
  }
}

/**
 * Класс Magician представляет тип персонажа Волшебник.
 * @extends Characters
 */
class Magician extends Characters {
  /**
   * Создаёт экземпляр волшебника.
   * @param {string} name - Имя персонажа.
   */
  constructor(name) {
    super(name, "Magician", 10, 40);
  }
}

/**
 * Класс Daemon представляет тип персонажа Демон.
 * @extends Characters
 */
class Daemon extends Characters {
  /**
   * Создаёт экземпляр демона.
   * @param {string} name - Имя персонажа.
   */
  constructor(name) {
    super(name, "Daemon", 10, 40);
  }
}

/**
 * Класс Zombie представляет тип персонажа Зомби.
 * @extends Characters
 */
class Zombie extends Characters {
  /**
   * Создаёт экземпляр зомби.
   * @param {string} name - Имя персонажа.
   */
  constructor(name) {
    super(name, "Zombie", 40, 10);
  }
}

/**
 * Класс Undead представляет тип персонажа Нежить.
 * @extends Characters
 */
class Undead extends Characters {
  /**
   * Создаёт экземпляр нежити.
   * @param {string} name - Имя персонажа.
   */
  constructor(name) {
    super(name, "Undead", 25, 25);
  }
}

export {
  Characters,
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Zombie,
  Undead,
};