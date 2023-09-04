describe("Error Validation", () => {
  class ValidationError extends Error {
    constructor(public message: string) {
      super(message);
    }
  }

  function validateName(name: string): string {
    if (!name) {
      throw new ValidationError("Name is required");
    }

    if (name.length < 5) {
      throw new ValidationError("Name must be at least 5 characters");
    }

    return name;
  }

  it("should throw error when name is empty", () => {
    expect(() => {
      validateName("");
    }).toThrowError("Name is required");
  });

  it("should throw error when name is less than 5 characters", () => {
    expect(() => {
      validateName("John");
    }).toThrowError("Name must be at least 5 characters");
  });

  it("should return name when name is valid", () => {
    const name = validateName("John Doe");
    expect(name).toBe("John Doe");
    console.info(name);
  });
});
