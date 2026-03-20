from __future__ import annotations

import argparse
import sys
from collections.abc import Sequence


def greet(name: str) -> str:
    """Return a greeting message for a non-empty name."""
    normalized_name = name.strip()
    if not normalized_name:
        msg = "name must contain at least one non-whitespace character"
        raise ValueError(msg)

    return f"Hello, {normalized_name}!"


def _build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Print a greeting")
    parser.add_argument("name", nargs="?", default="World", help="Name to greet")
    return parser


def parse_name_arg(argv: Sequence[str] | None = None) -> str:
    """Parse and return the name argument from CLI args."""
    parser = _build_parser()
    args = parser.parse_args(argv)
    return args.name


def main(argv: Sequence[str] | None = None) -> int:
    """Run the CLI and return a process exit code."""
    try:
        print(greet(parse_name_arg(argv)))
    except ValueError as error:
        print(f"Error: {error}", file=sys.stderr)
        return 1

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
