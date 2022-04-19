const user = {
  name: "Vitor",
  getName: () => {
    console.log(`Hellooooo, I'm ${user.name}!`);
  },
};

user.getName();

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName = () => {
    return this.name;
  };
}

let FirstPerson = new Person("Donnavan", 20);
let SecondPerson = new Person("Marcus", 25);
let ThirdPerson = new Person("Jhonnatan", 17);

console.log(`${FirstPerson.getName()} and ${SecondPerson.getName()}!`);

class GameRoom {
  constructor(name, level, players) {
    this.name = name;
    this.level = level;
    this.players = players;
  }

  getName = () => {
    return this.name;
  };

  getLevel = () => {
    return this.level;
  };

  getPlayers = () => {
    return this.players;
  };
}

let TeamOne = new GameRoom("Husky", 20, [
  FirstPerson.getName(),
  SecondPerson.getName(),
  ThirdPerson.getName(),
]);

console.log(
  `First Team: ${TeamOne.getName()}, level: ${TeamOne.getLevel()}, players: ${TeamOne.getPlayers()}`
);

class Employers {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName = () => {
    return this.name;
  };

  getAge = () => {
    return this.age;
  };
}

class Developer extends Employers {
  constructor(name, age, language) {
    super(name, age);
    this.language = language;
  }

  sayHi = () => {
    console.log(
      `My name is ${this.getName()}, i'm ${this.getAge()}! I use ${
        this.language
      }...`
    );
  };
}

let DevOne = new Developer("Zack", 22, "JavaScript");

DevOne.sayHi();
