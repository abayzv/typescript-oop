describe("Getter and Setter", () => {
  class Person {
    _name?: string;

    get name(): string {
      if (!this._name) {
        return "Guest";
      } else {
        return this._name;
      }
    }

    set name(name: string) {
      if (name !== "") {
        this._name = name;
      }
    }
  }

  it("Should can have getter and setter", () => {
    const person: Person = new Person();
    console.log(person.name);
    expect(person.name).toBe("Guest");

    person.name = "Aji";
    console.log(person.name);
    expect(person.name).toBe("Aji");

    person.name = "";
    console.log(person.name);
    expect(person.name).toBe("Aji");
  });
});
