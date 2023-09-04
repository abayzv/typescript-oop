describe("Method", () => {
  class Person {
    readonly id: number;
    name: string;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it("should can have method", () => {
    const person: Person = new Person(1, "Aji");

    person.sayHello("Budi");
  });
});
