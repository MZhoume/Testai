import { greet } from "../src/index";

describe("greet", () => {
  it("returns a greeting for World", () => {
    expect(greet("World")).toBe("Hello, World!");
  });

  it("uses the provided name", () => {
    expect(greet("Alice")).toBe("Hello, Alice!");
  });
});
