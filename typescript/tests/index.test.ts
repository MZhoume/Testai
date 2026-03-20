import { greet, parseNameArg, runCli } from "../src/index";

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

describe("runCli", () => {
  it("writes greeting and returns 0 for valid input", () => {
    const stdout = { log: jest.fn() };
    const stderr = { error: jest.fn() };

    expect(runCli(["node", "script.js", " Alice "], stdout, stderr)).toBe(0);
    expect(stdout.log).toHaveBeenCalledWith("Hello, Alice!");
    expect(stderr.error).not.toHaveBeenCalled();
  });

  it("writes error and returns 1 for invalid input", () => {
    const stdout = { log: jest.fn() };
    const stderr = { error: jest.fn() };

    expect(runCli(["node", "script.js", "   "], stdout, stderr)).toBe(1);
    expect(stderr.error).toHaveBeenCalledWith(
      "Error: name must contain at least one non-whitespace character"
    );
    expect(stdout.log).not.toHaveBeenCalled();
  });
});
