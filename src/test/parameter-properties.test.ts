describe("Parameter Properties", () => {
  class Person {
    constructor(public name: string) {}
  }

  it("should create a new instance of Person", () => {
    const person = new Person("John Doe");
    console.info(person);
    expect(person.name).toBe("John Doe");
  });
});
