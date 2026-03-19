export function greet(name: string): string {
  return `Hello, ${name}!`;
}

function main(): void {
  console.log(greet("World"));
}

if (require.main === module) {
  main();
}
