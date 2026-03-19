export function greet(name: string): string {
  const normalizedName = name.trim();

  if (!normalizedName) {
    throw new Error("name must contain at least one non-whitespace character");
  }

  return `Hello, ${normalizedName}!`;
}

export function parseNameArg(argv: readonly string[]): string {
  return argv[2] ?? "World";
}

function main(argv: readonly string[] = process.argv): void {
  console.log(greet(parseNameArg(argv)));
}

if (require.main === module) {
  main();
}
