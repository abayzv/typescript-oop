describe("Type Cast", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class Director extends Manager {}

  function greetings(employee: Employee): void {
    if (employee instanceof Director) {
      const director = employee as Director;
      console.info(`Hello Director ${director.name}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello Manager ${manager.name}`);
    } else {
      console.info(`Hello Employee ${employee.name}`);
    }
  }

  it("should support typecast", () => {
    greetings(new Employee("Aji Bayu"));
    greetings(new Manager("Dian Puspita"));
    greetings(new Director("Angga Pratama"));
  });
});
