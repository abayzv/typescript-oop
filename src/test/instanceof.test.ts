describe("Instance Of", () => {
  class Employee {}
  class Manager {}

  const aji = new Employee();
  const bayu = new Manager();

  it("should have problem using typeof", () => {
    console.info(typeof aji);
    expect(typeof aji).toBe("object");

    console.info(typeof bayu);
    expect(typeof bayu).toBe("object");
  });

  it("should support instanceof", () => {
    expect(aji instanceof Employee).toBe(true);
    expect(aji instanceof Manager).toBe(false);

    expect(bayu instanceof Employee).toBe(false);
    expect(bayu instanceof Manager).toBe(true);
  });
});
