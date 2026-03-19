import pytest

from main import greet


def test_greet_returns_greeting() -> None:
    assert greet("World") == "Hello, World!"


def test_greet_uses_provided_name() -> None:
    assert greet("Alice") == "Hello, Alice!"


def test_greet_normalizes_whitespace() -> None:
    assert greet("  Alice  ") == "Hello, Alice!"


def test_greet_rejects_empty_names() -> None:
    with pytest.raises(ValueError, match="at least one non-whitespace"):
        greet("   ")
