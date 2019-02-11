export default class Character {
  //used when instantiating an object
  constructor(name, favFood) {
    this.name = name;
    this.favFood = favFood;
  };

  //methods are defined after the constructor directly on the object
  eat(food) {
    if (food == this.favFood) {
      console.log('Cowabunga dude!')
    };
    console.log(`${this.name} is eating ${food}`);
  };

};

console.log('let\'s do stuff');
