describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}

    sayHello(): void {
      console.info(`Hello, my name is ${this.name}, i am an employee`);
    }
  }

  class Manager extends Employee {
    sayHello(): void {
      console.info(`Hello, my name is ${this.name}, now i am a manager`);
    }
  }

  class Director extends Manager {
    sayHello(): void {
      console.info(`Hello, my name is ${this.name}, now i am a director`);
    }
  }

  class Person {
    constructor(public name: string) {}
  }

  function greetings(employee: Employee): void {
    console.info(`Hello, my name is ${employee.name}`);
  }

  it("should support polymorphism", () => {
    let employee: Employee = new Employee("Aji Bayu");
    employee.sayHello();

    employee = new Manager("Aji Bayu");
    employee.sayHello();

    employee = new Director("Aji Bayu");
    employee.sayHello();
  });

  it("should support method polymorphism", () => {
    greetings(new Employee("Aji Bayu"));
    greetings(new Manager("Dian Puspita"));
    greetings(new Director("Angga Pratama"));

    // it should error
    // greetings(new Person("John Doe"));
  });
});
