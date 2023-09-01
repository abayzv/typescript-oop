describe("Interface", () => {
  interface HasName {
    name: string;
  }

  interface CanSayhello {
    sayHello(name: string): void;
  }

  class Person implements HasName, CanSayhello {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it("should support inheritance", () => {
    const person = new Person("Aji");
    person.sayHello("Angga");
  });
});
