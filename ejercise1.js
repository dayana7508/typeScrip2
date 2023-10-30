
class Vehicle {
    constructor(model, year, color) {
      this.model = model;
      this.year = year;
      this.color = color;
    }
  }
  
  
  class Car extends Vehicle {
    constructor(model, year, color, numberOfDoors) {
      super(model, year, color);
      this.numberOfDoors = numberOfDoors;
    }
  }
  
  
  class Motorcycle extends Vehicle {
    constructor(model, year, color, engineDisplacement) {
      super(model, year, color);
      this.engineDisplacement = engineDisplacement;
    }
  }
  
  
  const myCar = new Car('Toyota', 2023, 'Red', 4);
  const myMotorcycle = new Motorcycle('Honda', 2023, 'Black', 500);
  
  console.log('Car:', myCar);
  console.log('Motorcycle:', myMotorcycle);
  