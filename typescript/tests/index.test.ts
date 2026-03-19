import { greet, parseNameArg } from "../src/index";

describe("greet", () => {
  it("returns a greeting for World", () => {
    expect(greet("World")).toBe("Hello, World!");
  });

  it("uses the provided name", () => {
    expect(greet("Alice")).toBe("Hello, Alice!");
  });

  it("trims names before greeting", () => {
    expect(greet("  Alice  ")).toBe("Hello, Alice!");
  });

  it("throws for whitespace-only names", () => {
    expect(() => greet("   ")).toThrow(
      "name must contain at least one non-whitespace character"
    );
  });
});

describe("parseNameArg", () => {
  it("uses the positional cli name when present", () => {
    expect(parseNameArg(["node", "script.js", "Alice"]))
      .toBe("Alice");
  });

  it("falls back to World when no name is provided", () => {
    expect(parseNameArg(["node", "script.js"])).toBe("World");
  });
});
