class Drink {
  #temperature;
  #makeDrink() {
    console.log(`Текущая температура напитка ${this.#temperature} \u2103`)
    this.setTemperature();
    console.log(`Готовится ${this.name}`);
    console.log(`Итоговая температура ${this.getTemperature()} \u2103`);
    console.log('Ваш напиток готов!')
  }
  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
    if (new.target === Drink) {
      throw new Error("Нельзя создавать экземпляр Drink");
    }
  }

  getInfo() {
    return (`Название напитка: ${this.name}, Размер: ${this.size}, Цена: ${this.price} \u20BD`);
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(value) {
    if (value < (this.#temperature) - 10 || value > ((this.#temperature) + 10) ) {
      throw new Error('Установите приемлемую температуру')
    }
    const temperature = (this.#temperature = value)
    console.log(`Установленная температура ${temperature} \u2103`);
  }

  serveDrink() {
    this.#makeDrink() 
  }
}


class Cappuccino extends Drink {
  constructor(name, size, price, temperature, typeOfBeans, typeOfMilk) {
    super(name, size, price, temperature);
    this.typeOfBeans = typeOfBeans;
    this.typeOfMilk = typeOfMilk;
  }

  getInfo() {
    return (`${super.getInfo()}, Вид зерен: ${this.typeOfBeans}, Молоко: ${this.typeOfMilk}`);
  }

  setTemperature() {
    super.setTemperature(55);
  }

}

const cappuccino = new Cappuccino('cappuccino', 'medium', 170, 65, 'arabic', 'almond')



class Tea extends Drink {
  constructor(name, size, price, temperature, typeOfTea, amountOfSugar) {
    super(name, size, price, temperature);
    this.typeOfTea = typeOfTea;
    this.amountOfSugar = amountOfSugar;
  }

  getInfo() {
    return (`${super.getInfo()}, Вид чая: ${this.typeOfTea}, Сахар: ${this.amountOfSugar}`);
  }

  setTemperature() {
    super.setTemperature(70)
  }

}

const tea = new Tea('tea', 'large', 120, 75, 'green', '2 servings')


class Juice extends Drink {
  constructor(name, size, price, temperature, typeOfJuice, pulp) {
    super(name, size, price, temperature);
    this.typeOfJuice = typeOfJuice;
    this.pulp = pulp;
  }

  getInfo() {
    return (`${super.getInfo()}, Вид сока: ${this.typeOfJuice}, Мякоть: ${this.pulp}`);
  }

  setTemperature() {
    super.setTemperature(15)
  }

}

const juice = new Juice('juice', 'large', 140, 20, 'orange', 'yes')



class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `Название кафе: ${this.name}, Адрес: ${this.location}`;
  }

  orderDrink(drink) {
    console.log(drink.getInfo());
    console.log('Напиток выбран');
    drink.serveDrink();   
  }
}

const cafe = new Cafe('Comfort', 'Leninskaya street 18')
console.log(cafe.getInfo())
cafe.orderDrink(cappuccino)
