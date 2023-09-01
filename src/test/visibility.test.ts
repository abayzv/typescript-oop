describe("Visibility", () => {
  it("should support private", () => {
    class Counter {
      private counter: number = 0;

      increment(): void {
        this.counter++;
      }

      getCounter(): number {
        return this.counter;
      }
    }

    const counter = new Counter();

    counter.increment();
    counter.increment();
    console.info(counter.getCounter());
  });

  it("should support protected", () => {
    class Counter {
      protected counter: number = 0;

      increment(): void {
        this.counter++;
      }

      getCounter(): number {
        return this.counter;
      }
    }

    class DoubleCounter extends Counter {
      increment(): void {
        this.counter++;
        this.counter++;
      }
    }

    const counter = new DoubleCounter();

    counter.increment();
    counter.increment();
    console.info(counter.getCounter());
  });
});
