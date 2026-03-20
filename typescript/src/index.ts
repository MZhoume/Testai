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

export function runCli(
  argv: readonly string[] = process.argv,
  stdout: Pick<Console, "log"> = console,
  stderr: Pick<Console, "error"> = console
): number {
  try {
    stdout.log(greet(parseNameArg(argv)));
    return 0;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    stderr.error(`Error: ${message}`);
    return 1;
  }
}

if (require.main === module) {
  process.exitCode = runCli();
}
