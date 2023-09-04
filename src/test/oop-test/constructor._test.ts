describe("Constructor", () => {
  class Person {
    constructor() {
      console.log("Create new person");
    }
  }

  it("should use constructor", () => {
    const person: Person = new Person();
  });

  it("should can create constructor", () => {
    new Person();
    new Person();
  });
});
