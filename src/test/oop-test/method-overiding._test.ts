describe("Method Overiding", () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  class Manager extends Employee {
    sayHello(name: string): void {
      super.sayHello(name);
      console.info(`i'am a Manager`);
    }
  }

  it("should support method overiding", () => {
    const employee = new Employee("Aji");
    const manager = new Manager("Bayu");

    employee.sayHello("Ana");
    manager.sayHello("Dian");
  });
});
