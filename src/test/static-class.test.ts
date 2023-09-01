describe("Static Class", () => {
  class Configuration {
    static NAME: string = "Aji Bayu";
    static VERSION: string = "1.0.0";
    static ENVIRONMENT: string = "development";
  }

  it("should support static class", () => {
    console.info(Configuration.NAME);
    expect(Configuration.NAME).toBe("Aji Bayu");

    console.info(Configuration.VERSION);
    expect(Configuration.VERSION).toBe("1.0.0");

    console.info(Configuration.ENVIRONMENT);
    expect(Configuration.ENVIRONMENT).toBe("development");
  });
});

describe("Static Method", () => {
  class MathUtils {
    static sum(...values: number[]): number {
      let result: number = 0;

      for (let value of values) {
        result += value;
      }
      return result;
    }
  }

  it("should support static method", () => {
    console.info(MathUtils.sum(1, 2, 3, 4, 5));
    expect(MathUtils.sum(1, 2, 3, 4, 5)).toBe(15);
  });
});
