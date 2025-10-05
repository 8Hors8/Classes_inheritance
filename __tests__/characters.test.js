import {
  Characters,
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Zombie,
  Undead,
} from "../src/characters.js";

describe("Классы персонажей (первая задача)", () => {
  test("Bowman создаётся корректно", () => {
    const bowman = new Bowman("Robin");
    expect(bowman.name).toBe("Robin");
    expect(bowman.type).toBe("Bowman");
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });

  test("Swordsman создаётся корректно", () => {
    const swordsman = new Swordsman("Arthur");
    expect(swordsman.name).toBe("Arthur");
    expect(swordsman.type).toBe("Swordsman");
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(1);
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });

  test("Magician создаётся корректно", () => {
    const magician = new Magician("Merlin");
    expect(magician.name).toBe("Merlin");
    expect(magician.type).toBe("Magician");
    expect(magician.health).toBe(100);
    expect(magician.level).toBe(1);
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });

  test("Daemon создаётся корректно", () => {
    const daemon = new Daemon("Azazel");
    expect(daemon.name).toBe("Azazel");
    expect(daemon.type).toBe("Daemon");
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });

  test("Zombie создаётся корректно", () => {
    const zombie = new Zombie("Walker");
    expect(zombie.name).toBe("Walker");
    expect(zombie.type).toBe("Zombie");
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });

  test("Undead создаётся корректно", () => {
    const undead = new Undead("Lich");
    expect(undead.name).toBe("Lich");
    expect(undead.type).toBe("Undead");
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });
});

describe("Классы персонажей и валидация", () => {
  // Проверка корректного создания персонажей
  test("Bowman создаётся корректно", () => {
    const bowman = new Bowman("Robin");
    expect(bowman.name).toBe("Robin");
    expect(bowman.type).toBe("Bowman");
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });

  // Проверка ошибок в имени
  test("Ошибка, если имя - не строка", () => {
    expect(() => {
      new Bowman(123);
    }).toThrow("Имя должно быть строкой длиной от 2 до 10 символов");
  });

  test("Ошибка, если имя меньше 2 символов", () => {
    expect(() => {
      new Bowman("A");
    }).toThrow("Имя должно быть строкой длиной от 2 до 10 символов");
  });

  test("Ошибка, если имя больше 10 символов", () => {
    expect(() => {
      new Bowman("ОченьДлинноеИмя");
    }).toThrow("Имя должно быть строкой длиной от 2 до 10 символов");
  });

  // Проверка ошибок в типе персонажа
  test("Ошибка, если тип персонажа неверный", () => {
    expect(() => {
      new Characters("Robin", "InvalidType", 10, 10);
    }).toThrow("Неверный тип персонажа");
  });

  // Можно проверить остальные классы аналогично, например Swordsman и т.д.
});
