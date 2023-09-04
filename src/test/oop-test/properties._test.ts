describe("Properties", () => {
  class Person {
    readonly id: number;
    name: string = "Guest";
    age?: number;

    constructor(id: number) {
      this.id = id;
    }
  }

  it("should can have properties", () => {
    const person: Person = new Person(2);

    console.info(person);
    person.name = "Aji";
    person.age = 20;

    console.info(person);
  });
});
