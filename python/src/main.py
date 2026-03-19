from __future__ import annotations

import argparse


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


def main() -> None:
    parser = _build_parser()
    args = parser.parse_args()
    print(greet(args.name))


if __name__ == "__main__":
    main()
