import "./homework-6.js";
import "./homework-7.js"
import "./homework-8.js"
import "./homework-9.js"
import "./homework-10.js"
import "./homework-11.js"
import "./Modal.js"
import "./Form.js"

class Metal{
  constructor(name, meltingPoint, ) {
    this.name = name;
    this.meltingPoint = meltingPoint;   
  }

  showElement() {
    console.log(`Химический элемент: ${this.name} \nТемпература плавления: ${this.meltingPoint} градусов по Цельсию`);
  }
}

const metalLi = new Metal('Litium', 180.5)
metalLi.showElement()


class AmphotericMetal extends Metal{
  constructor(name, meltingPoint, elementNumber) {
    super(name, meltingPoint);
    this.elementNumber = elementNumber;
  }

  showNumber() {
    console.log(`Номер элемента в периодической системе: ${this.elementNumber}`)
  }
}

const metalAl = new AmphotericMetal('Aluminium', 660.3, 13)
const metalZn = new AmphotericMetal('Zinkum', 419.5, 30)

metalAl.showElement()
metalZn.showElement()
metalZn.showNumber()



