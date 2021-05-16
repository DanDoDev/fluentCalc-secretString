// Test cases are pre written to output. Run "node fluentCalc.js"

class Calc {
  constructor() {
    // If the question requested method chaining to extend further,
    //I would store values and operations in seperate arrays instead of hardcoded Object Props;
    this.valA;
    this.operation;
    this.valB;
    this.error;
  }

  // logic methods
  numberAssigner(number) {
    if (this.valA == null) this.valA = number;
    else if (this.operation && this.valB == null) {
      this.valB = number;
      this.eval();
    } else this.error = true;
  }

  eval() {
    try {
      if (this.error) console.log("There is an error in input!");
      else console.log(eval(`${this.valA} ${this.operation} ${this.valB}`));
    } catch {
      console.log("There is an error in eval!");
    }
    this.new();
  }
  new() {
    this.valA = null;
    this.operation = null;
    this.valB = null;
    this.error = null;
  }
  // logic methods

  //operations
  plus() {
    this.operation = "+";
    return this;
  }
  minus() {
    this.operation = "-";
    return this;
  }
  times() {
    this.operation = "*";
    return this;
  }
  divided_by() {
    this.operation = "/";
    return this;
  }
  //operations

  //numbers
  zero() {
    this.numberAssigner(0);
    return this;
  }
  one() {
    this.numberAssigner(1);
    return this;
  }
  two() {
    this.numberAssigner(2);
    return this;
  }
  three() {
    this.numberAssigner(3);
    return this;
  }
  four() {
    this.numberAssigner(4);
    return this;
  }
  five() {
    this.numberAssigner(5);
    return this;
  }
  six() {
    this.numberAssigner(6);
    return this;
  }
  seven() {
    this.numberAssigner(7);
    return this;
  }
  eight() {
    this.numberAssigner(8);
    return this;
  }
  nine() {
    this.numberAssigner(9);
    return this;
  }
  //numbers
}

const calc = new Calc();

calc.one().plus().two();
calc.five().minus().six();
calc.seven().times().two();
calc.nine().divided_by().three();
