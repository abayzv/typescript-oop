describe("Inheritance", () => {
  class Employee {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  it("should support inheritance", () => {
    class Manager extends Employee {}
    class Director extends Manager {}

    const manager = new Manager("Aji");
    const director = new Director("Bayu");

    console.log(manager.name);
    console.log(director.name);
  });
});
